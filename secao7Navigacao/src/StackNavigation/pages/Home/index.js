import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  function irSobre() {
    navigation.navigate('Sobre', {name: 'Saron', email: 'saron@gmail.com'});
  }

  return (
    <View>
      <Text>Uai home!</Text>
      <Text>Estamos no home!</Text>

      <Button title="Ir para sobre" onPress={irSobre} />
    </View>
  );
};

export default Home;
