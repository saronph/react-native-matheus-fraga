import React, {Component} from 'react';
import {View} from 'react-native';

// import Dog from './src/components/Dog';

class App extends Component {
  //flexDirection = alinha a ordem, 'row' em linha, 'column' coluna
  //justifyContent = alinha em linha quando flexDirection 'row', ou inverso em 'column'
  //alignItems = alinha em coluna quando flexDirection 'row', ou inverso em 'column'
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <View style={{width: 50, height: 50, backgroundColor: 'black'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
      </View>
    );
  }
}

export default App;
