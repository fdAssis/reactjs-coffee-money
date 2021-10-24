import Modal from 'react-modal';
import { Container, TransitionTypeContainer, ButtonBox } from './styles';

import ImgClose from '../../assets/close.svg';
import ImgIncome from '../../assets/income.svg';
import ImgOutcome from '../../assets/outcome.svg';
import { useState } from 'react';


interface NewTransitionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransitionModal({isOpen,  onRequestClose}:NewTransitionModalProps){

  const [type, setType] = useState('deposit');

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
        
        <TransitionTypeContainer>
          <ButtonBox
            type="button"
            onClick={() => {setType('deposit')}}
            isSelected={type === 'deposit'}
            selectColor='green'
          >
            <img src={ImgIncome} alt="Entrada" />
            <span>Entrada</span>
            
          </ButtonBox>

          <ButtonBox
            type="button"
            onClick={() => {setType('withdraw')}}
            isSelected={type === 'withdraw'}
            selectColor='red'
          >
            <img src={ImgOutcome} alt="Saida" />
            <span>Saida</span>
            
          </ButtonBox>

        </TransitionTypeContainer>

        <input placeholder='Categoria' />
        <input type="date" placeholder='Data' />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}