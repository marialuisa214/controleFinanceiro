import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";


export const Overlay = styled(Dialog.Overlay)`
    position: fixed; // fixa o elemento na tela

    // ocupa toda a tela
    width: 100vw;
    height: 100vh;

    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    
`

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${(props) => props.theme['gray-800']};
    position: fixed;

    // centraliza o elemento na tela
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); // move o elemento para o centro

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border-radius: 6px;
            border: 0;
            background-color: ${(props) => props.theme['gray-900']};
            color: ${(props) => props.theme['gray-300']};   
            padding: 1rem;

            &::placeholder {
                color: ${(props) => props.theme['gray-500']};
            }
        }

        button[type="submit"] {
            height: 58px;
            border-radius: 6px;
            border: 0;
            background-color: ${(props) => props.theme['green-500']};
            color: ${(props) => props.theme['white']};
            margin-top: 1.5rem;
            font-weight: bold;
            padding: 0 1.25rem;

            cursor: pointer;

            &:hover {
                background-color: ${(props) => props.theme['green-700']};
                transition: background-color 0.2s;
            }

        }

    }
    
`

export const CloseButton = styled(Dialog.Close)`
    position: absolute; // fixa o elemento na tela
    background: transparent;
    border: 0;

    top: 1.5rem;
    right: 1.5rem;

    cursor: pointer;
    color: ${(props) => props.theme['gray-500']};
    /* line-height: 0; */

    

`