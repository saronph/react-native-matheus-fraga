import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

// import Dog from './src/components/Dog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(nome) {
    this.setState({
      nome: nome,
    });
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
        <Button title="Entrar" onPress={() => this.entrar('Saron')} />

        <Text style={{fontSize: 20, textAlign: 'center'}}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
}

export default App;
