import { useState } from 'react';
import Modal from '@/app/components/Modal';
import { useModalContext } from '@/app/contexts/ModalContext';
import { useRuneContext } from '@/app/contexts/RuneContext';
import RuneContent from './components/RuneContent';
import RuneList from './components/RuneList';

const RuneViewer = () => {
  const { open, onClose } = useModalContext();
  const { collectedRunes } = useRuneContext();
  const [selectedRune, setSelectedRune] = useState<string>(collectedRunes[0]);

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col-reverse xs:flex-row h-auto max-h-dvh overflow-hidden">
        <RuneList rune={selectedRune} setSelectedRune={setSelectedRune} />
        <RuneContent rune={selectedRune} />
      </div>
    </Modal>
  );
};

export default RuneViewer;
