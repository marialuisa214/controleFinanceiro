import { MagnifyingGlass } from "@phosphor-icons/react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const serchFormSchema = z.object({
    query: z.string(),
})

type SearchFormSchema = z.infer<typeof serchFormSchema> // inferir o tipo de uma variável

export function SearchForm() {
    const {register, handleSubmit, formState:{ isSubmitting }} = useForm<SearchFormSchema>({
        resolver: zodResolver(serchFormSchema), // resolver o esquema, para que o formulário só seja submetido se estiver tudo certo
    }); 

    // reset -> limpa os campos do formulário
    // handleSubmit -> executa uma OUTRA FUNÇÃO quando o formulário for submetido
    // register -> registra os campos do formulário
    // watch -> monitora os campos do formulário
    // formState -> estado do formulário
    //formState.isSubmitting -> se o formulário está sendo submetido

    async function handleSearchTransactions(data: SearchFormSchema) {
        await new Promise((resolver) => setTimeout(resolver, 2000));
        console.log(data);

    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input type="text"
             placeholder="Busque por Transações"
             {...register('query')}
             
             />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>

                Buscar 
            </button>
        </SearchFormContainer>
    )
}