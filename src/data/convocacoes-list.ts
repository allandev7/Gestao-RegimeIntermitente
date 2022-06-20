import { Convocacao } from "../models/convocacao";

export const convocacoes: Convocacao[] = [{
  id: 7,
  titulo: 'Serviço para QA Pleno',
  descricao: 'Fazer testes de funcinalidade manuais, além de escrever testes em cypress para o produto e também backend',
  dataInicial: '30/05/2022',
  dataFinal: '15/07/2022',
  qtdVaga:2,
  convocados: [{
    nome: 'Allan da Silva Pereira', status: 'Aceito'
  }, {
    nome: 'Guilherme Vercosa', status: 'Negado'
  }, {
    nome: 'Pedro Aguirre', status: 'Não Respondeu'
  }]
},
{
  id: 8,
  titulo: 'Serviço para Backend Simples',
  descricao: 'Criação de 3 entidades e seus relacionamentos',
  dataInicial: '30/05/2022',
  dataFinal: '16/07/2022',
  qtdVaga:2,
  convocados: [{
    nome: 'Alysson da Silva Pereira', status: 'Aceito'
  }, {
    nome: 'Guilherme Vercosa', status: 'Negado'
  }, {
    nome: 'Pedro Aguirre', status: 'Não Respondeu'
  }]
},
{
  id: 9,
  titulo: 'Serviço Backend Avançado',
  descricao: 'Atualização de uma API de SOAP para REST',
  dataInicial: '30/05/2022',
  dataFinal: '18/07/2022',
  qtdVaga:1,
  convocados: [{
    nome: 'Alysson da Silva Pereira', status: 'Negado'
  }, {
    nome: 'Guilherme Vercosa', status: 'Negado'
  }, {
    nome: 'Pedro Aguirre', status: 'Não Respondeu'
  }]
},
{
  id: 10,
  titulo: 'Serviço para FrontEnd',
  descricao: 'Criação de uma landing page',
  dataInicial: '30/05/2022',
  dataFinal: '22/07/2022',
  qtdVaga:1,
  convocados: [{
    nome: 'Allan da Silva Pereira', status: 'Não Respondeu'
  }, {
    nome: 'Guilherme Vercosa', status: 'Não Respondeu'
  }, {
    nome: 'Pedro Aguirre', status: 'Não Respondeu'
  }]
}
];


export const convocacoesAntigas: Convocacao[] = [
  {
    id: 3,
    titulo: 'Serviço para Desginer',
    descricao: 'Criar 3 telas utilizando as leis de nielsen e o conceito de affordance',
    dataInicial: '30/05/2022',
    dataFinal: '05/06/2022',
    qtdVaga:2,
    convocados: [{
      nome: 'Pedro Aguirre', status: 'Aceito'
    }, {
      nome: 'Guilherme Vercosa', status: 'Aceito'
    }, {
      nome: 'Allan da Silva Pereira', status: 'Não Respondeu'
    }]
  },
  {
    id: 4,
    titulo: 'Serviço para Mobile',
    descricao: 'Adaptação de um design (Mudança de laout, cores e marca)',
    dataInicial: '30/05/2022',
    dataFinal: '05/06/2022',
    qtdVaga:1,
    convocados: [{
      nome: 'Allan da Silva Pereira', status: 'Aceito'
    }, {
      nome: 'Guilherme Vercosa', status: 'Não Respondeu'
    }, {
      nome: 'Pedro Aguirre', status: 'Não Respondeu'
    }]
  },
  {
    id: 5,
    titulo: 'Serviço para FrontEnd c/ Integração',
    descricao: 'Mudar integração e adicionar validações nos campos de formulário',
    dataInicial: '30/05/2022',
    dataFinal: '05/06/2022',
    qtdVaga:1,
    convocados: [{
      nome: 'Alysson da Silva Pereira', status: 'Não Respondeu'
    }, {
      nome: 'Guilherme Vercosa', status: 'Não Respondeu'
    }, {
      nome: 'Pedro Aguirre', status: 'Aceito'
    }]
  },
  {
    id: 6,
    titulo: 'Serviço para Devops',
    descricao: 'Instalação do JENKINS no servidor para maior facilidade de Deploy',
    dataInicial: '30/05/2022',
    dataFinal: '05/06/2022',
    qtdVaga:1,
    convocados: [{
      nome: 'Alysson da Silva Pereira', status: 'Não Respondeu'
    }, {
      nome: 'Guilherme Vercosa', status: 'Não Respondeu'
    }, {
      nome: 'Allan da Silva Pereira', status: 'Aceito'
    }]
  }
];