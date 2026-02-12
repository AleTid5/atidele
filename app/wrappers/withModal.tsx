import type { ComponentType } from 'react';
import { ModalProvider } from '../contexts/ModalContext';

const withModal =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) => (
    <ModalProvider>
      <Component {...props} />
    </ModalProvider>
  );

export default withModal;
