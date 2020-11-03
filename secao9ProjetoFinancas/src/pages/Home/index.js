import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';

import {AuthContext} from '../../contexts/auth';

const Home = () => {
  const {user, signOut} = useContext(AuthContext);
  return (
    <View>
      <Text>Home</Text>
      <Text>{user && user.email}</Text>
      <Text>{user && user.name}</Text>
      <Button title="Sair do aplicativo" onPress={() => signOut()} />
    </View>
  );
};

export default Home;
