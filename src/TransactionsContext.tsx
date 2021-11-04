import {createContext, ReactNode, useEffect, useState} from 'react';
import { api } from './services/api';

interface Transactions{
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// interface TransactionsInput{
//   title: string;
//   amount: number;
//   type: string;
//   category: string;
// }

// type TransactionsInput = Omit<Transactions, 'id' | 'createdAt'>

type TransactionsInput = Pick<Transactions, 'title' | 'amount' | 'type' | 'category'>

interface TransactionsProviderProps{
  children: ReactNode;
}

interface TransactionsContextData{
  transactions: Transactions[];
  createTransaction: (transaction: TransactionsInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionProvider({children}:TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions));
  },[]);

  
  async function createTransaction(transactionInput: TransactionsInput){
    const response =  await api.post('/transactions', {...transactionInput, createdAt: new Date(),
    });
    
    const {transaction} = response.data;

    setTransactions([
      ...transactions,
      transaction
    ]);
  }

  return(
    <TransactionContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionContext.Provider>
  )
}
