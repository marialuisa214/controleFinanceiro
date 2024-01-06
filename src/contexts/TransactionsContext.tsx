import { createContext, useEffect, useState } from "react";

interface Transaction {
    id: number,
    description: string,
    type: "outcome" | "income",
    category: string,
    price: number,
    create: string
}


interface TransactionsContextType {
    transactions: Transaction[]  
}

interface TransactionsProviderProps {
    children: React.ReactNode
}

export const TransactionsContext = createContext( {} as TransactionsContextType);

export function TransactionsProvider({children} : TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function loadTransactions() { 
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json() 

        setTransactions(data)
        
        // fetch() é uma função nativa do JS que faz requisições HTTP
        
        // async é uma função assíncrona, que vai ser executada em segundo plano, sem travar a aplicação, enquanto o resto do código é executado
        
        // await é uma palavra reservada que faz com que o JS espere a requisição ser concluída para continuar a execução do código
}

    useEffect(() => { 

        loadTransactions()
    }, []) 

    return (
        <TransactionsContext.Provider value={{transactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}