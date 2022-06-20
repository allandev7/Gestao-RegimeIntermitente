import React from 'react';
import { Dimensions, SafeAreaView, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { funcionarios } from '../../data/funcionario-list';
import { styles } from './style';

export default function UserDetail({ route, navigation }) {
  const { id } = route.params;  
  const funcionario = funcionarios.find(x => x.id === id);
  const width = Dimensions.get('window').width;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text
        style={styles.title}>
        {funcionario?.nome}
      </Text>
      <View style={styles.row}>
        <Text
          style={styles.txtBold}>
          CPF:
        </Text>
        <Text
          style={styles.txt}>
          {" " + funcionario?.cpf}
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={styles.txtBold}>
          E-mail:
        </Text>
        <Text
          style={styles.txt}>
          {" " + funcionario?.email}
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={styles.txtBold}>
          Telefone: 
        </Text>
        <Text
          style={styles.txt}>
          {" " + funcionario?.telefone}
        </Text>
      </View>
      <View style={styles.row}>
        <Text
          style={styles.txtBold}>
          Status: 
        </Text>
        <Text
          style={[styles.txt, {color: funcionario?.status === 'Disponível' ? 'green':'#333'}]}>
          {" " + funcionario?.status}
        </Text>
      </View>
      <Text
        style={[styles.title, { marginTop: '5%' }]}>
        Habilidades
      </Text>
      <Text style={styles.txt}>
        {funcionario?.habilidades.join('\n')}
      </Text>
      <Text
        style={[styles.title, { marginTop: '10%' }]}>
        Convocações:
      </Text>
      <FlatList
        keyExtractor={({ titulo }) => titulo}
        style={{ flex: 1 }}
        data={funcionario?.convocacoes}
        horizontal
        renderItem={({ item }) => (
          <View style={[styles.convocadoContainer, { width: width - (width * 0.2) }]}>
            <Text
              style={styles.txtBold}>
              {item.titulo}
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