import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';

// import Dog from './src/components/Dog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      input: '',
    };

    // this.pegaNome = this.pegaNome.bind(this);
    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    if (this.state.input === '') {
      alert('Digite seu nome!');
      return;
    } else {
      this.setState({nome: 'Bem vindo ' + this.state.input});
    }
  }

  // pegaNome(texto) {
  //   if (texto.length > 0) {
  //     this.setState({nome: 'Bem vindo ' + texto});
  //   } else {
  //     this.setState({nome: ''});
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome..."
          underlineColorAndroid="transparent"
          // onChangeText={this.pegaNome}
          onChangeText={(texto) => this.setState({input: texto})}
        />

        <Button title="Entrar" onPress={this.entrar} />

        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default App;
