import type { ButtonProps } from '@/app/atoms/Button';
import Button from '@/app/atoms/Button';
import { useModalContext } from '@/app/contexts/ModalContext';
import { useRuneContext } from '@/app/contexts/RuneContext';
import withModal from '@/app/wrappers/withModal';
import RuneViewer from './RuneViewer/RuneViewer';

const RuneViewerButton = ({ children, ...props }: ButtonProps) => {
  const { collectedRunes } = useRuneContext();
  const { setModal } = useModalContext();

  return (
    <>
      <Button
        onClick={() => setModal(true)}
        disabled={collectedRunes.length === 0}
        {...props}
      >
        {children}
      </Button>
      {collectedRunes.length > 0 && <RuneViewer />}
    </>
  );
};

export default withModal(RuneViewerButton);
