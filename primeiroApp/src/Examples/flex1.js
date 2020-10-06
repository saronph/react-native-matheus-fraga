import React, {Component} from 'react';
import {View, Text} from 'react-native';

// import Dog from './src/components/Dog';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'yellow'}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Text>Primeiro Texto</Text>
          <Text>Primeiro Texto</Text>
          <Text>Primeiro Texto</Text>
          <Text>Primeiro Texto</Text>
          <Text>Primeiro Texto</Text>
          <Text>Primeiro Texto</Text>
          <Text>Primeiro Texto</Text>
          <Text>Primeiro Texto</Text>
          <Text>Primeiro Texto</Text>
          <Text>Primeiro Texto</Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'green'}} />
        <View style={{flex: 2, backgroundColor: 'blue'}} />
      </View>
    );
  }
}

export default App;
