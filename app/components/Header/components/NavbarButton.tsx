import Button from '@/app/atoms/Button';
import BarsIcon from '@/app/atoms/Icons/BarsIcon';
import { useModalContext } from '@/app/contexts/ModalContext';
import withModal from '@/app/wrappers/withModal';
import NavbarModal from './NavbarModal';

const NavbarButton = withModal(() => {
  const { setModal } = useModalContext();

  return (
    <>
      <Button
        id="menu-icon-button"
        aria-label="Open Menu"
        className="w-16 h-16 bg-orange-400 text-white px-3"
        onClick={() => setModal(true)}
      >
        <BarsIcon />
      </Button>
      <NavbarModal />
    </>
  );
});

export default NavbarButton;
