import Modal from 'react-modal';
import { Container } from './styles';
import ImgClose from '../../assets/close.svg';

interface NewTransitionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransitionModal({isOpen, onRequestClose}:NewTransitionModalProps){
  return (
     <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='new-modal-transition-overlay'
      className='new-modal-transition'
    >
      <button 
        type="button" 
        className="button-close-modal"
        onClick={onRequestClose}
        >
        <img src={ImgClose} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder='Titulo' />
        <input type="number" placeholder='Valor' />
        <input placeholder='Categoria' />
        <input type="date" placeholder='Data' />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}