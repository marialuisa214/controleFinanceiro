import styled from "styled-components";

export const TransactionContainer = styled.main`
    width: 100%;
    max-width: 1120px; 
    margin: 4rem auto 0; //top Right Bottom Left
    padding: 0 1.5rem ;// espaçamento nas laterias do conteudo

`
export const TransactionTable = styled.table`
    width: 100%;
    border-collapse: separate; // separa as bordas
    border-spacing: 0 0.5rem; // espaçamento entre as linhas
    /* margin-top: 1.5rem; */

    td {
        padding: 1.25rem 2rem;
        background: ${(props) => props.theme['gray-700']};

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }

    }
    `

interface PriceHighLightProps {
    variant: 'income' | 'outcome'
}
export const PriceHighLight = styled.span<PriceHighLightProps>`
    color: ${(props) => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};
    
`