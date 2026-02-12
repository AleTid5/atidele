import { useCallback, useMemo, useState } from 'react';

export type ModalStateOptions = { open: boolean; onClose: () => void };

export type OpenModalFunction = (newValue: boolean) => void;

const useModal = ({
  open: modalOpen,
  onClose,
}: Partial<ModalStateOptions> = {}): [ModalStateOptions, OpenModalFunction] => {
  const [open, setOpen] = useState(modalOpen);

  const handleSetOpen = useCallback((newValue: boolean) => {
    setOpen(newValue);
  }, []);

  const handleClose = useCallback(() => {
    handleSetOpen(false);
    onClose?.();
  }, [handleSetOpen, onClose]);

  const modalProps: ModalStateOptions = useMemo(
    () => ({
      open: !!open,
      onClose: handleClose,
    }),
    [open, handleClose],
  );

  return [modalProps, handleSetOpen];
};

export default useModal;
