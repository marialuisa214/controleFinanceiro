import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighLight, TransactionContainer, TransactionTable } from "./styles"


interface Transaction {

    id: number,
    description: string,
    type: "outcome" | "income",
    category: string,
    price: number,
    create: string

}

export function Trasactions() {

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

    const  itensTable = ['outcome','income','outcome']
    return (
        <div>
            <Header />
            <Summary />
            <TransactionContainer>
                <SearchForm />
                
                <TransactionTable>
                    <tbody>
                        {(transactions).map((transaction) => (
                            <tr key={transaction.id}>
                                <td width="40%">{transaction.description}</td>
                                <td className="deposit">
                                    <PriceHighLight variant={transaction.type === 'income' ? 'income' : 'outcome'}>
                                        R$ {transaction.price}
                                    </PriceHighLight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{transaction.create}</td>
                            </tr>
                        ))
                    }
                        
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
            



        </div>
    )
}