import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Convocacao } from '../../models/convocacao';
import { styles } from './style';



const Section: React.FC<{
  convocacao: Convocacao;
}> = ({ children, convocacao }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.sectionContainer} onPress={() => navigation.navigate('ConvocacaoDetail')}>
      <Text
        style={[styles.sectionTitle , { color: Colors.black }]}>
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

export default Section;


