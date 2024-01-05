import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useTheme } from "styled-components";

export function Summary() {
    const colors = useTheme();
    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color={colors['green-300']}/>
                </header>
                <strong>R$ 1000,00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color={colors['red-300']}/>
                </header>
                <strong>R$ 1000,00</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color={colors['white']}/>
                </header>
                <strong>R$ 1000,00</strong>
            </SummaryCard>

        </SummaryContainer>
    )
}