import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from 'react-modal';
import { GlobalStyles } from './styles/global';
import { NewTransitionModal } from './components/NewTransitionModal';

Modal.setAppElement('#root');

export function App() {

  const [
    isNewTransactionModalOpen, 
    setIsNewTransactionModalOpen,
  ] = useState(false); 

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
   <>
    <Header
      onOpenNewTransitionModal={handleOpenNewTransactionModal}
    />

    <Dashboard />

    <NewTransitionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
    />

    <GlobalStyles />
   </>
  );
}

