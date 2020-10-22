import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>
      <FontAwesome name="home" size={50} color="#1122c1" />
      <Feather name="gift" size={50} color="#111111" />

      <TouchableOpacity style={styles.btnYT}>
        <FontAwesome name="youtube" size={50} color="#000000" />
        <Text style={styles.btnText}>Acessar canal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnYT: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#ff0000',
    borderRadius: 10,
  },
  btnText: {
    paddingLeft: 10,
    color: '#fff',
    fontSize: 20,
  },
});
