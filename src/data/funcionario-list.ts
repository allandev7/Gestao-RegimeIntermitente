import { Funcionario } from "../models/funcionario";

export const funcionarios: Funcionario[] = [
  {
    id: 1,
    nome: 'Allan da Silva Pereira',
    cpf: '452.693.548-45',
    telefone: '(11) 94989-4987',
    habilidades:['JAVA', 'REACT NATIVE', 'JAVASCRIPT', 'ANGULAR', 'SPRING'],
    status: 'Disponível',
    email: 'allan.pereira@tgid.com.br',
    convocacoes:[
      {titulo:'Serviço para QA Pleno', status:'Aceito'},
      {titulo:'Serviço para FrontEnd', status:'Não Respondeu'},
      {titulo:'Serviço para Desginer', status:'Não Respondeu'},
      {titulo:'Serviço para Mobile', status:'Aceito'},
      {titulo:'Serviço para Devops', status:'Aceito'},
    ]
  },
  {
    id: 2,
    nome: 'Guilherme Vercosa',
    cpf: '493.471.390-50',
    telefone: '(11) 93283-4987',
    habilidades:['PYTHON', 'PANDAS', 'JAVASCRIPT'],
    status: 'Em Serviço',
    email: 'guilhermevercosa@gmail.com',
    convocacoes:[
      {titulo:'Serviço para QA Pleno', status:'Negado'},
      {titulo:'Serviço para Backend Simples', status:'Negado'},
      {titulo:'Serviço Backend Avançado', status:'Negado'},
      {titulo:'Serviço para FrontEnd', status:'Não Respondeu'},
      {titulo:'Serviço para Desginer', status:'Aceito'},
      {titulo:'Serviço para Mobile', status:'Não Respondeu'},
      {titulo:'Serviço para FrontEnd c/ Integração', status:'Não Respondeu'},
      {titulo:'Serviço para Devops', status:'Não Respondeu'},
    ]
  },
  {
    id: 3,
    nome: 'Alysson da Silva Pereira',
    cpf: '196.736.590-36',
    telefone: '(11) 9777-4247',
    habilidades:['DELPHI', 'PYTHON', 'PANDAS', 'JAVA'],
    status: 'Disponível',
    email: 'alyssonsp5@gmail.com',
    convocacoes:[
      {titulo:'Serviço para Backend Simples', status:'Aceito'},
      {titulo:'Serviço Backend Avançado', status:'Negado'},
      {titulo:'Serviço para FrontEnd c/ Integração', status:'Não Respondeu'},
      {titulo:'Serviço para Devops', status:'Não Respondeu'},
    ]
  },
  {
    id: 4,
    nome: 'Pedro Aguirre',
    cpf: '209.365.220-03',
    telefone: '(11) 99875-0806',
    habilidades:['COBOL', 'PASCAL', 'ASSEMBLY'],
    status: 'Tempo Legal',
    email: 'pedroromano@gmail.com',
    convocacoes:[
      {titulo:'Serviço para QA Pleno', status:'Não Respondeu'},
      {titulo:'Serviço para Backend Simples', status:'Não Respondeu'},
      {titulo:'Serviço Backend Avançado', status:'Não Respondeu'},
      {titulo:'Serviço para FrontEnd', status:'Não Respondeu'},
      {titulo:'Serviço para Desginer', status:'Aceito'},
      {titulo:'Serviço para Mobile', status:'Não Respondeu'},
      {titulo:'Serviço para FrontEnd c/ Integração', status:'Aceito'}
    ]
  },
  ];