import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { PriceHighLight, TransactionContainer, TransactionTable } from "./styles"


export function Trasaction() {
    const  itensTable = ['outcome','income','outcome']
    return (
        <div>
            <Header />
            <Summary />
            <TransactionContainer>
                <SearchForm />
                
                <TransactionTable>
                    <tbody>
                        {(itensTable).map((item) => (
                            <tr key={item}>
                                <td width="40%">Desenvolvimento de website</td>
                                <td className="deposit">
                                    <PriceHighLight variant={item === 'income' ? 'income' : 'outcome'}>
                                        R$ 12.000
                                    </PriceHighLight>
                                </td>
                                <td>Desenvolvimento</td>
                                <td>12/02/2021</td>
                            </tr>
                        ))
                    }
                        
                    </tbody>
                </TransactionTable>
            </TransactionContainer>
            



        </div>
    )
}