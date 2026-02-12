import type { PropsWithChildren } from 'react';
import { createContext, useContext, useLayoutEffect, useState } from 'react';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import { runes as AllRunes } from '../constants/runes';

type RuneContextType = {
  availableRunes: string[];
  collectedRunes: string[];
  collectRune: (rune: string) => void;
};

const RuneContext = createContext({
  availableRunes: [],
  collectedRunes: [],
  collectRune: () => {},
} as RuneContextType);

const { Provider } = RuneContext;

export const RuneProvider = ({ children }: PropsWithChildren) => {
  const [value, setValue] = useLocalStorage('collectedRunes', []);
  const [availableRunes, setAvailableRunes] = useState<string[]>([]);
  const [collectedRunes, setCollectedRunes] = useState<string[]>(value);

  const collectRune = (rune: string) => {
    const runes = [...collectedRunes, rune];
    setValue(runes);
    setCollectedRunes(runes);
  };

  useLayoutEffect(() => {
    setCollectedRunes(value);
    setAvailableRunes(AllRunes.filter((rune) => !value.includes(rune)));
  }, [value]);

  return (
    <Provider value={{ availableRunes, collectedRunes, collectRune }}>
      {children}
    </Provider>
  );
};

export const useRuneContext = () => {
  const context = useContext(RuneContext);

  if (!context) {
    throw new Error('useRuneContext must be used within a RuneProvider');
  }

  return context;
};
