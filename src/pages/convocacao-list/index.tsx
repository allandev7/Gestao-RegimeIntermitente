import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, SafeAreaView, StatusBar } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import Section from '../../components/section-convocacao';
import { convocacoes, convocacoesAntigas } from '../../data/convocacoes-list';
import { actions } from '../../data/floating-actions';
import { styles } from './style';


//FUNCIONA, PORÉM DEVE CONFIGURAR TYPESCRIPT DO NAVIGATION
export default function ConvocacaoList({ route, navigation }) {

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

  const isHistoric = route.name === 'Historic' ;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle='light-content' />
      <FlatList
        keyExtractor={({ id }) => id.toString()}
        style={{ flexGrow: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={ isHistoric ? convocacoesAntigas : convocacoes}
        renderItem={({ item }) => (<Section convocacao={item} />)} />
      <FloatingAction
        visible={!isHistoric}
        actions={actions}
        onPressItem={name => floatingAction(name)}
      />
    </SafeAreaView>
  );
}
