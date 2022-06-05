import { useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, SafeAreaView, StatusBar } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import Section from '../../components/section-funcionario';
import { actions } from '../../data/floating-actions';
import { funcionarios } from '../../data/funcionario-list';
import { styles } from './style';


//FUNCIONA, PORÉM DEVE CONFIGURAR TYPESCRIPT DO NAVIGATION
export default function UserList({ navigation }) {
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
        data={funcionarios}
        renderItem={({ item }) => (<Section funcionario={item} />)} />
      <FloatingAction
        actions={actions}
        onPressItem={name => floatingAction(name)}
      />
    </SafeAreaView>
  );
}
