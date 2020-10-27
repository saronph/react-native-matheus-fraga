import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

const Listagem = ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data.name}</Text>
      <Text style={styles.text}>{data.cargo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#121212',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Listagem;
