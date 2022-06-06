import React from 'react';
import { Dimensions, SafeAreaView, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from './style';


const convocacao = {
  id: 1,
  titulo: 'Serviço para QA Senior',
  descricao: 'Fazer testes de funcinalidade manuais, além de escrever testes em cypress para o produto e também backend',
  dataInicial: '30/05/2022',
  dataFinal: '07/06/2022',
  qtdVagas: 3,
  qtdAceites: 1
};

const convocados = [
  {
    nome: 'Allan da Silva Pereira',
    status: 'Não respondeu'
  },
  {
    nome: 'Pedro Aguirre',
    status: 'Aceito'
  },
  {
    nome: 'Guilherme Vercosa',
    status: 'Negou'
  }
];

const ConvocacaoDetail = () => {
  const width = Dimensions.get('window').width;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text
        style={styles.title}>
        {convocacao.titulo}
      </Text>
      <Text
        style={styles.description}>
        {convocacao.descricao}
      </Text>
      <View style={styles.row}>
        <Text
          style={styles.txtBold}>
          Data inicial:
        </Text>
        <Text
          style={styles.txt}>
          {" " + convocacao.dataInicial}
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={styles.txtBold}>
          Data Final  :
        </Text>
        <Text
          style={styles.txt}>
          {" " + convocacao.dataFinal}
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={styles.txtBold}>
          Vagas:
        </Text>
        <Text
          style={styles.txt}>
          {" " + convocacao.qtdAceites} {convocacao.qtdAceites > 1 ? "aceitas" : "aceita"} de {convocacao.qtdVagas} vagas
        </Text>
      </View>
      <Text
        style={[styles.title, { marginTop: '20%' }]}>
        Funcionários convocados:
      </Text>
      <FlatList
        keyExtractor={({ nome }) => nome}
        style={{ flex: 1 }}
        data={convocados}
        horizontal
        renderItem={({ item }) => (
          <View style={[styles.convocadoContainer, { width: width - (width * 0.2) }]}>
            <Text
              style={styles.txtBold}>
              {item.nome}
            </Text>
            <Text
              style={styles.txt}>
              {item.status}
            </Text>
          </View>
        )} />
    </SafeAreaView>
  );
};

export default ConvocacaoDetail;
