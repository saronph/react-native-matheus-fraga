import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';

import {AuthContext} from '../../contexts/auth';

const New = () => {
  const {user, signOut} = useContext(AuthContext);
  return (
    <View>
      <Text>New</Text>
      <Text>{user && user.email}</Text>
      <Text>{user && user.name}</Text>
      <Button title="Sair do aplicativo" onPress={() => signOut()} />
    </View>
  );
};

export default New;
