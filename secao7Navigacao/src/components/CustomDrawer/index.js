import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Perfil from '../../img/perfil.png';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          width: '100%',
          height: 77,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          marginTop: 25,
        }}>
        <Image source={Perfil} style={{width: 65, height: 65}} />
        <Text
          style={{color: '#000', fontSize: 17, marginTop: 5, marginBottom: 25}}>
          Bem vindo!
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
