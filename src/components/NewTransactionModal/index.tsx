import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "@phosphor-icons/react";

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

                        {/* <input type="radio" />
                        <input type="radio" /> */}

                        <button type="submit">Cadastrar</button>
                    </form>
                    
                </Content>
            </Dialog.Portal>

    )
}