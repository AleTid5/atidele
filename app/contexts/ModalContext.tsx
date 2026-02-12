import type { PropsWithChildren } from 'react';
import { createContext, useContext } from 'react';
import type { ModalStateOptions, OpenModalFunction } from '../hooks/useModal';
import useModalState from '../hooks/useModal';

type ModalContextType = ModalStateOptions & {
  setModal: OpenModalFunction;
};

const ModalContext = createContext({
  open: false,
  onClose: () => {},
  setModal: () => {},
} as ModalContextType);

const { Provider } = ModalContext;

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [{ open, onClose }, setModal] = useModalState();

  return <Provider value={{ open, onClose, setModal }}>{children}</Provider>;
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }

  return context;
};
