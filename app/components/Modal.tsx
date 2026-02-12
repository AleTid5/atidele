import type { PropsWithChildren } from 'react';
import { useEffect, useRef } from 'react';
import usePortal from '@/app/hooks/usePortal';
import Button from '../atoms/Button';
import CloseIcon from '../atoms/Icons/CloseIcon';

type ModalProps = PropsWithChildren<{ open: boolean; onClose: () => void }>;

const Modal = ({ children, open, onClose }: ModalProps) => {
  const modalRef = useRef(null);
  const { openPortal } = usePortal();

  useEffect(() => {
    const handleKeyDown = ({ key }: KeyboardEvent) =>
      key === 'Escape' && onClose();

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    }

    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  return (
    open &&
    openPortal(
      <div
        className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-modal bg-black/50 backdrop-blur-sm z-50"
        onClick={({ target }) => modalRef.current === target && onClose()}
        ref={modalRef}
      >
        <div className="relative w-full xs:max-w-(--breakpoint-xs) sm:max-w-3xl h-screen md:h-4/5 bg-purple-950 md:mx-8 md:rounded-3xl scrollable-inset overflow-x-hidden">
          <div className="absolute right-0 top-0 z-50 flex justify-end drop-shadow-[2px_4px_6px_#3b0664]">
            <Button className="p-0 pt-3 pr-3" onClick={onClose}>
              <CloseIcon />
            </Button>
          </div>
          <div className="px-4 sm:px-8">{children}</div>
        </div>
      </div>,
    )
  );
};

export default Modal;
