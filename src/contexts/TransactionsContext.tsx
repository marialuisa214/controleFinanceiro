import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
    id: number,
    description: string,
    type: "outcome" | "income",
    category: string,
    price: number,
    create: string
}


interface TransactionsContextType {
    transactions: Transaction[] ,
    fechTransactions: (query?: string) => Promise<void> //função assicrona(Promise) sem nenhum retorno
}

interface TransactionsProviderProps {
    children: React.ReactNode
}

export const TransactionsContext = createContext( {} as TransactionsContextType);

export function TransactionsProvider({children} : TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fechTransactions( query?: string) { 
        const response = await api.get('/transactions', {
            params:{
                q: query
            }
        })

        setTransactions(response.data)
}

    useEffect(() => { 

        fechTransactions()
    }, []) 

    return (
        <TransactionsContext.Provider 
            value={{
                transactions,
                fechTransactions
            }}>
            {children}
        </TransactionsContext.Provider>
    )
}