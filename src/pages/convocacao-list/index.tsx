import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { convocacoes, convocacoesAntigas } from '../../data/convocacoes-list';
import { actions } from '../../data/floating-actions';
import { Convocacao } from '../../models/convocacao';
import { styles } from './style';



const Section: React.FC<{
  convocacao: Convocacao;
}> = ({ children, convocacao }) => {
  return (
    <TouchableOpacity style={styles.sectionContainer}>
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
    </TouchableOpacity>
  );
};

//FUNCIONA, PORÉM DEVE CONFIGURAR TYPESCRIPT DO NAVIGATION
export default function ConvocacaoList({ navigation }) {
  const route = useRoute();

  function floatingAction(btn: string | undefined) {
    switch (btn) {
      case 'bt_convocacao':
        navigation.navigate('ConvocacaoForm');
        break;

      case 'bt_user':
        navigation.navigate('UserForm');
        break;
    }
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle='light-content' />
      <FlatList
        keyExtractor={({ id }) => id.toString()}
        style={{ flexGrow: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={route.name === 'Historic' ? convocacoesAntigas : convocacoes}
        renderItem={({ item }) => (<Section convocacao={item} />)} />
      <FloatingAction
        actions={actions}
        onPressItem={name => floatingAction(name)}
      />
    </SafeAreaView>
  );
}
