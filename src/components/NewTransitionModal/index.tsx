import { FormEvent, useState} from 'react';
import Modal from 'react-modal';
import { Container, TransitionTypeContainer, ButtonBox } from './styles';

import ImgClose from '../../assets/close.svg';
import ImgIncome from '../../assets/income.svg';
import ImgOutcome from '../../assets/outcome.svg';
import { useTransaction } from '../../hooks/useTransactions';


interface NewTransitionModalProps{
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransitionModal({isOpen,  onRequestClose}:NewTransitionModalProps){

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  const {createTransaction} = useTransaction();

  async function handleNewTransition(event:FormEvent){
    event.preventDefault();
    
    await createTransaction({
      title,
      type,
      category,
      amount: value,
    });

    onRequestClose();
    setTitle('');
    setType('deposit');
    setValue(0);
    setCategory('');
  }

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

      <Container onSubmit={handleNewTransition}>
        <h2>Cadastrar Transação</h2>
        <input
          placeholder='Titulo'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
       <input
          type="number"
          placeholder='Valor'
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />
        
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

        <input
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}