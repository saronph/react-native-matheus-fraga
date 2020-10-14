import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Slider
          maximumValue={100}
          onValueChange={(valorSelecionado) =>
            this.setState({valor: valorSelecionado})
          }
          value={this.state.valor}
          minimumTrackTintColor="#00ff00"
          maximumTrackTintColor="#ff9999"
        />
        <Text style={{textAlign: 'center', fontSize: 30}}>
          {this.state.valor.toFixed(0)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default App;
