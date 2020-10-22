import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Uai home!</Text>
      <Button title="Contato" onPress={() => navigation.navigate('Contato')} />
      <Button
        title="Abrir menu"
        onPress={() => navigation.toggleDrawer('Contato')}
      />
    </View>
  );
};

export default Home;
