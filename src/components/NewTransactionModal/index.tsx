import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";

export function NewTransactionModal() {
    return (
            <Dialog.Portal> // O portal é o elemento que vai ficar por cima de tudo, fora de qualquer parte da aplicação
                <Overlay /> // O overlay é a parte escura que fica por cima de tudo
                <Content>
                    <Dialog.Title>Nova Transação</Dialog.Title>
                    <CloseButton>
                        <X size={24} />
                    </CloseButton>
                    <form>
                        <input placeholder="Descrição" required/>
                        <input placeholder="Preço" required/>
                        <input placeholder="Categoria" required/>

                        <TransactionType>
                            <TransactionTypeButton value="income" activeColor='green'>
                                <ArrowCircleUp size={24} />
                                Entrada
                            </TransactionTypeButton>

                            <TransactionTypeButton value="outcome" activeColor='red'>
                                <ArrowCircleDown size={24} />
                                Saida
                            </TransactionTypeButton>

                        </TransactionType>

                        <button type="submit">Cadastrar</button>
                    </form>
                    
                </Content>
            </Dialog.Portal>

    )
}