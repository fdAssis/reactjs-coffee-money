import Modal from 'react-modal';

interface NewTransitionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransitionModal({isOpen, onRequestClose}:NewTransitionModalProps){
  return (
     <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar Transação</h2>
    </Modal>
  )
}