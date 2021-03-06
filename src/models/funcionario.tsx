import { ConvocacaoFuncionario } from "./convocacao-funcionario";

export interface Funcionario {
    id:number;
    nome: string;
    cpf: string;
    email: string;
    status: string;
    telefone: string;
    habilidades:string[];
    convocacoes: ConvocacaoFuncionario[];
}