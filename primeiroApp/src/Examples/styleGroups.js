import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import Dog from './src/components/Dog';

class App extends Component {
  render() {
    return (
      <View style={styles.area}>
        <Text style={[styles.texto1, styles.alinhar]}>Texto 1</Text>
        <Text style={styles.alinhar}>Texto 2</Text>
        <Text>Texto 3</Text>
        <Text>Texto 4</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  area: {
    marginTop: 40,
  },
  texto1: {
    fontSize: 25,
    color: '#FF0000',
  },
  alinhar: {
    textAlign: 'center',
  },
});

export default App;
