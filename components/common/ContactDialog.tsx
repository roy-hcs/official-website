'use client';

import Dialog from './Dialog';
import SubmitInfo from './SubmitInfo';

interface ContactDialogProps {
  visible: boolean;
  onClose: () => void;
}

export default function ContactDialog({ visible, onClose }: ContactDialogProps) {
  const handleSuccess = () => {
    onClose();
  };

  return (
    <Dialog 
      visible={visible} 
      onClose={onClose}
      closeOnClickModal={true}
    >
      <SubmitInfo onSuccess={handleSuccess} />
    </Dialog>
  );
}