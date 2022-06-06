import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConvocacaoList from '../pages/convocacao-list';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ConvocacaoForm from '../pages/convocacao-form';
import UserForm from '../pages/user-form';
import UserList from '../pages/user-list';
import ConvocacaoDetail from '../pages/convocacao-detail';
import UserDetail from '../pages/user-detail';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ConvocacaoList" options={{ title: "Convocações Atuais" }} component={ConvocacaoList} />
      <Stack.Screen name="ConvocacaoDetail" options={{ title: "Detalhes da Convocação" }} component={ConvocacaoDetail} />
      <Stack.Screen name="ConvocacaoForm" options={{ title: "Nova Convocação" }} component={ConvocacaoForm} />
      <Stack.Screen name="UserForm" options={{ title: "Cadastrar Funcionário" }} component={UserForm} />
    </Stack.Navigator>
  )
}
function HistoricoStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Historic" options={{ title: "Convocações Atuais" }} component={ConvocacaoList} />
      <Stack.Screen name="ConvocacaoDetail" options={{ title: "Detalhes da Convocação" }} component={ConvocacaoDetail} />
     </Stack.Navigator>
  )
}
function FuncionarioStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UserList" options={{ title: "Usuários" }} component={UserList} />
      <Stack.Screen name="ConvocacaoForm" options={{ title: "Nova Convocação" }} component={ConvocacaoForm} />
      <Stack.Screen name="UserForm" options={{ title: "Cadastrar Funcionário" }} component={UserForm} />
      <Stack.Screen name="UserDetail" options={{ title: "Detalhes Funcionário" }} component={UserDetail} />
    </Stack.Navigator>
  )
}

export default function Route() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeStack" options={{ title: "Convocações Atuais" }} component={MainStack} />
        <Drawer.Screen name="HistoricStack" options={{ title: "Histórico de Convocações" }} component={HistoricoStack} />
        <Drawer.Screen name="FuncionarioStack" options={{ title: "Funcionários" }} component={FuncionarioStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}