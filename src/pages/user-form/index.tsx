import React from 'react';
import { Button, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './style';

const UserForm = () => {

  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <TextInput placeholder='Nome' style={styles.input} />
      <TextInput placeholder='CPF' style={styles.input} />
      <TextInput placeholder='E-mail' style={styles.input} />
      <TextInput placeholder='Telefone' style={styles.input} />
      <TextInput placeholder='Habilidade (Clique no "+" para adicionar)' style={styles.input} />
      <TouchableOpacity style={styles.btnPlus}>
        <Text style={styles.txtPlus}> + </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSubmit}>
        <Text style={styles.txtPlus}> Cadastrar </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserForm;
