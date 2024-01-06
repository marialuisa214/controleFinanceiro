import { useContext} from "react"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighLight, TransactionContainer, TransactionTable } from "./styles"
import { TransactionsContext } from "../../contexts/TransactionsContext"
import { dataFormatter, priceFormatter } from "../../utils/formatter"



export function Trasactions() {

    const { transactions } = useContext(TransactionsContext);


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
                                        {transaction.type === 'outcome' && '- ' }
                                        {priceFormatter.format(transaction.price)}
                                    </PriceHighLight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{dataFormatter.format(new Date(transaction.create))}</td>
                            </tr>
                        ))
                    }
                        
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
            



        </div>
    )
}