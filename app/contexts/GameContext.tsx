import type { PropsWithChildren } from 'react';
import { createContext, useContext, useState } from 'react';

type GameContextType = {
  isPlaying: boolean;
  toggleIsPlaying: () => void;
};

const GameContext = createContext({
  isPlaying: false,
  toggleIsPlaying: () => {},
} as GameContextType);

const { Provider } = GameContext;

export const GameProvider = ({ children }: PropsWithChildren) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleIsPlaying = () => setIsPlaying((playing) => !playing);

  return <Provider value={{ isPlaying, toggleIsPlaying }}>{children}</Provider>;
};

export const useGameContext = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }

  return context;
};
