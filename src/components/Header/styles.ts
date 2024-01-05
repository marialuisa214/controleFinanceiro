import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${(props) => props.theme['gray-900']};
    padding: 2.5rem 0  7.5rem //top right bottom left(por padrao 0)

`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px; //largura maxima -> em caso de telas maiores colocamos um limite do espaco que o conteudo pode ocupar

    margin: 0 auto; //centralizar o conteudo
    padding: 0 1.5rem ;// espaçamento nas laterias do conteudo

    display: flex;
    justify-content: space-between; //espaçamento entre os elementos
    align-items: center; //alinhar os elementos no centro

`
export const NewTransactionButton =styled.button`
    height: 50px;
    border: 0;
    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['white']};
    font-weight: bold ;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;
    
    &:hover {
        background-color: ${(props) => props.theme['green-700']};
        transition: background-color 0.3s;
    }


`