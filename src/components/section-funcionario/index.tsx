import { useNavigation, useNavigationState } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Funcionario } from '../../models/funcionario';
import { styles } from './style';



const Section: React.FC<{
  funcionario:Funcionario;
}> = ({ children, funcionario }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('UserDetail')} style={styles.sectionContainer}>
      <Text
        style={styles.sectionTitle}>
        {funcionario.nome}
      </Text>
      <Text
        style={styles.sectionDescription}>
        {funcionario.habilidades.join(', ')}
      </Text>
      <Text
        style={[styles.sectionDescription, {color: funcionario.status === 'Disponível' ? 'green' : '#333' }]}>
        {funcionario.status}
      </Text>
    </TouchableOpacity>
  );
};

export default Section;