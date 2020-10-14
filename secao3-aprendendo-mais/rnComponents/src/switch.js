import React, {Component} from 'react';
import {StyleSheet, View, Text, Switch} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Switch
          value={this.state.status}
          onValueChange={(valorSwitch) => this.setState({status: valorSwitch})}
          thumbColor="#ab1111"
        />

        <Text>
          {this.state.status
            ? 'Você selecionou corretamente'
            : 'Não está selecionado'}
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
