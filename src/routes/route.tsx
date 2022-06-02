import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConvocacaoList from '../pages/convocacao-list';
import Historico from '../pages/historico';
import ConvocacaoForm from '../pages/convocacao-form';
import UserForm from '../pages/user-form';

const Stack = createNativeStackNavigator();


export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{title:"Convocações Atuais"}} component={ConvocacaoList} />
        <Stack.Screen name="Historico" options={{title:"Histórico de Convocações"}} component={Historico} />
        <Stack.Screen name="ConvocacaoForm" options={{title:"Nova Convocação"}} component={ConvocacaoForm} />
        <Stack.Screen name="UserForm" options={{title:"Cadastrar Funcionário"}} component={UserForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}