import React from 'react';
import { Dimensions, SafeAreaView, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { convocacoes, convocacoesAntigas } from '../../data/convocacoes-list';
import { styles } from './style';

export default function ConvocacaoDetail({ route, navigation }) {
  const { id } = route.params;
  const allConvocacoes = [...convocacoes, ...convocacoesAntigas];
  const convocacao = allConvocacoes.find(x => x.id === id);
  const qtdAceites = convocacao?.convocados.filter(x => x.status === "Aceito").length;
  const width = Dimensions.get('window').width;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text
        style={styles.title}>
        {convocacao?.titulo}
      </Text>
      <Text
        style={styles.description}>
        {convocacao?.descricao}
      </Text>
      <View style={styles.row}>
        <Text
          style={styles.txtBold}>
          Data inicial:
        </Text>
        <Text
          style={styles.txt}>
          {" " + convocacao?.dataInicial}
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={styles.txtBold}>
          Data Final  :
        </Text>
        <Text
          style={styles.txt}>
          {" " + convocacao?.dataFinal}
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={styles.txtBold}>
          Vagas:
        </Text>
        <Text
          style={styles.txt}>
          {" " + qtdAceites} {qtdAceites || 0 > 1 ? "aceitas" : "aceita"} de {convocacao?.qtdVaga} vagas
        </Text>
      </View>
      <Text
        style={[styles.title, { marginTop: '20%' }]}>
        Funcionários convocados:
      </Text>
      <FlatList
        keyExtractor={({ nome }) => nome}
        style={{ flex: 1 }}
        data={convocacao?.convocados}
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
