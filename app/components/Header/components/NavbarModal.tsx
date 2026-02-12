import { pages } from '@/app/constants/pages';
import { useModalContext } from '@/app/contexts/ModalContext';
import usePortal from '@/app/hooks/usePortal';
import withScroller from '@/app/wrappers/withScroller';

const NavbarModal = withScroller(({ scrollTo }) => {
  const { open, onClose } = useModalContext();
  const { openPortal } = usePortal();

  return openPortal(
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 md:hidden backdrop-blur-md
          ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 right-0 z-50 w-56 max-h-max transform transition-transform duration-300 md:hidden
          ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
      >
        <nav className="flex flex-col gap-8 px-4 py-6">
          {pages.map(({ name, id }) => (
            <div
              key={id}
              role="button"
              className="bg-linear-to-r from-orange-200 to-orange-300 bg-clip-text text-transparent hover:text-orange-300 text-2xl"
              onClick={() => {
                scrollTo(id);
                onClose();
              }}
            >
              {name}
            </div>
          ))}
        </nav>
      </aside>
    </>,
  );
});

export default NavbarModal;
