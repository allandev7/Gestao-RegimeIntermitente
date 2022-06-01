/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Convocacao } from '../../models/convocacao';

import { styles } from './style';

const convocacoes: Convocacao[] = [{
  id: 1,
  titulo: 'Vaga para QA Pleno',
  descricao: 'Fazer testes de funcinalidade manuais, além de escrever testes em cypress para o produto e também backend',
  dataInicial: '30/05/2022',
  dataFinal: '07/06/2022'
}, {
  id: 2,
  titulo: 'Vaga para Backend',
  descricao: 'Saber fazer integrações via feign, Saber escrever testes e dedicação',
  dataInicial: '30/05/2022',
  dataFinal: '05/06/2022'
}, {
  id: 3,
  titulo: 'Vaga para Backend',
  descricao: 'Saber fazer integrações via feign, Saber escrever testes e dedicação',
  dataInicial: '30/05/2022',
  dataFinal: '05/06/2022'
}, {
  id: 4,
  titulo: 'Vaga para Backend',
  descricao: 'Saber fazer integrações via feign, Saber escrever testes e dedicação',
  dataInicial: '30/05/2022',
  dataFinal: '05/06/2022'
}, {
  id: 5,
  titulo: 'Vaga para Backend',
  descricao: 'Saber fazer integrações via feign, Saber escrever testes e dedicação',
  dataInicial: '30/05/2022',
  dataFinal: '05/06/2022'
}, {
  id: 6,
  titulo: 'Vaga para Backend',
  descricao: 'Saber fazer integrações via feign, Saber escrever testes e dedicação',
  dataInicial: '30/05/2022',
  dataFinal: '05/06/2022'
}
];

const Section: React.FC<{
  convocacao: Convocacao;
}> = ({ children, convocacao }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[styles.sectionTitle, { color: Colors.black }]}>
        {convocacao.titulo}
      </Text>
      <Text
        style={[styles.sectionDescription, { color: Colors.dark }]}>
        {convocacao.descricao}
      </Text>
      <View style={styles.rowDate}>
        <Text>
          Data inicial: {convocacao.dataInicial}
        </Text>
        <Text>
          Data final: {convocacao.dataFinal}
        </Text>
      </View>
    </View>
  );
};

const App = () => {

  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <StatusBar barStyle='light-content' />
      <FlatList
        keyExtractor={({ id }) => id.toString()}
        style={{ flexGrow: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={convocacoes}
        renderItem={({ item }) => (<Section convocacao={item} />)} />
    </SafeAreaView>
  );
};

export default App;
