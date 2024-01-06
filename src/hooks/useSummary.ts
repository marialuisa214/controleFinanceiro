import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";


// abstrair a lógica de cálculo do resumo em um hook customizado 
export function useSummary() {
    const { transactions } = useContext(TransactionsContext); 
    // objeto {totalIncome: 0, totalOutcome: 0, total: 0}

    const summary = transactions.reduce(
        (acc, transaction) => {
            if(transaction.type === 'income') {
                acc.totalIncome += transaction.price
                acc.total += transaction.price
            } else {
                acc.totalOutcome += transaction.price
                acc.total -= transaction.price
            }
            return acc
        }, 
            {
                totalIncome: 0, 
                totalOutcome: 0, 
                total: 0}) 

    return summary
}