import { Funcionario } from "../models/funcionario";

export const funcionarios: Funcionario[] = [
  {
    id: 1,
    nome: 'Allan da Silva Pereira',
    telefone: '(11) 94989-4987',
    habilidades:['JAVA', 'REACT NATIVE', 'JAVASCRIPT', 'ANGULAR', 'SPRING'],
    status: 'Disponível',
    email: 'allan.pereira@tgid.com.br'
  },
  {
    id: 2,
    nome: 'Guilherme Vercosa',
    telefone: '(11) 93283-4987',
    habilidades:['PYTHON', 'PANDAS', 'JAVASCRIPT'],
    status: 'Em Serviço',
    email: 'guilhermevercosa@gmail.com'
  },
  {
    id: 3,
    nome: 'Alysson da Silva Pereira',
    telefone: '(11) 9777-4247',
    habilidades:['DELPHI', 'PYTHON', 'PANDAS', 'JAVA'],
    status: 'Disponível',
    email: 'alyssonsp5@gmail.com'
  },
  {
    id: 4,
    nome: 'Pedro Aguirre',
    telefone: '(11) 99875-0806',
    habilidades:['COBOL', 'PASCAL', 'ASSEMBLY'],
    status: 'Tempo Legal',
    email: 'pedroromano@gmail.com'
  },
  ];