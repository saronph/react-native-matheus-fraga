import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Sobre = ({route}) => {
  const navigation = useNavigation();

  navigation.setOptions({
    title: `Sobre ${route.params?.name}`,
  });

  // <Text> {route.params?.name}</Text> '?' não quebra a app caso nao tenha essa info

  return (
    <View>
      <Text>Uai sobre!</Text>
      <Text> {route.params?.name}</Text>
      <Text> {route.params?.email}</Text>
      <Button title="Voltar para home" onPress={() => navigation.goBack()} />

      <Button title="Contato" onPress={() => navigation.navigate('Contato')} />
    </View>
  );
};

export default Sobre;
