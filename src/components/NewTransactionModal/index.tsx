import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(["income", "outcome"]),
});

type NewTransactionSchema = z.infer<typeof newTransactionSchema>;

export function NewTransactionModal() {

    const { 
            register, 
            control, // controla o estado do formulário
            handleSubmit, 
            formState: { isSubmitting } 
    } = useForm<NewTransactionSchema>({
            resolver: zodResolver(newTransactionSchema),
    });

    async function handleCreateNewTransaction(data: NewTransactionSchema) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
    }
 
    return (
            <Dialog.Portal> // O portal é o elemento que vai ficar por cima de tudo, fora de qualquer parte da aplicação
                <Overlay /> // O overlay é a parte escura que fica por cima de tudo
                <Content>
                    <Dialog.Title>Nova Transação</Dialog.Title>
                    <CloseButton>
                        <X size={24} />
                    </CloseButton>
                    <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                        <input  
                            placeholder="Descrição"
                             required
                             {...register('description')}/>
                        <input 
                            placeholder="Preço" 
                            required
                            {...register('price', {valueAsNumber: true})}/>
                        <input 
                            placeholder="Categoria"
                             required
                             {...register('category')}/>

                        <Controller 
                            control={control}
                            name="type"
                            render={({ field }) => {
                                return (
                                    <TransactionType 
                                        onValueChange={field.onChange} 
                                        value={field.value}>
                                    <TransactionTypeButton 
                                        value="income" 
                                        activeColor='green'>
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>

                                    <TransactionTypeButton 
                                        value="outcome" 
                                        activeColor='red'>
                                        <ArrowCircleDown size={24} />
                                        Saida
                                    </TransactionTypeButton>

                                </TransactionType> 

                                )}
                            }
                        />

                        <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                    </form>
                    
                </Content>
            </Dialog.Portal>

    )
}