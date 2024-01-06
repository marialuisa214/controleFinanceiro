import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from "../../utils/formatter";

export function Summary() {
    const colors = useTheme();

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
    
    
    // O reduce() é uma função nativa do JS que serve para reduzir um array a um único valor

    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color={colors['green-300']}/>
                </header>
                <strong>{priceFormatter.format(summary.totalIncome)}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color={colors['red-300']}/>
                </header>
                <strong>{priceFormatter.format(summary.totalOutcome)}</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color={colors['white']}/>
                </header>
                <strong>{priceFormatter.format(summary.total)}</strong>
            </SummaryCard>

        </SummaryContainer>
    )
}