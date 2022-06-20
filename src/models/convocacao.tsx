import { FuncionarioConvocado } from "./funcionario-convocado";

export interface Convocacao {
    id: number;
    titulo: string;
    descricao: string;
    dataInicial: any;
    dataFinal: any;
    qtdVaga: number;
    horario?:string;
    remuneracao?:number;
    convocados: FuncionarioConvocado[];
}