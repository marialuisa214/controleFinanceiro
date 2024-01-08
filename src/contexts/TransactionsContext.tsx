import { useEffect, useState, useCallback } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

interface Transaction {
  id: number
  description: string
  type: 'outcome' | 'income'
  category: string
  price: number
  create: string
}
interface TransactionInputForm {
  description: string
  type: 'outcome' | 'income'
  category: string
  price: number
}

interface TransactionsContextType {
  transactions: Transaction[]
  fechTransactions: (query?: string) => Promise<void> // função assicrona(Promise) sem nenhum retorno
  createTransaction: (data: TransactionInputForm) => Promise<void>
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fechTransactions = useCallback(
    async (query?: string) => {
      const response = await api.get('/transactions', {
        params: {
          _sort: 'create',
          _order: 'desc',
          q: query,
        },
      })
  
      setTransactions(response.data)
    }, []
  )

  // useCallback -> memoriza uma função, para que ela não seja recriada toda vez que o componente for renderizado, e sim somente quando a dependência mudar

  const createTransaction = useCallback(
    async (data: TransactionInputForm) => {
      const { description, category, type, price } = data
  
      const response = await api.post('/transactions', {
        description,
        category,
        type,
        price,
        create: new Date(),
      })
  
      setTransactions((state) => [response.data, ...state])
    }, [] // array de dependências, se alguma dependência mudar, a função será recriada 
  ) 

  useEffect(() => {
    fechTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fechTransactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
