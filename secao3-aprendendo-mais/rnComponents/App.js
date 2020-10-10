import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {id: '1', nome: 'Saron', idade: 32, email: 'saron@teste.com'},
        {id: '2', nome: 'Joao', idade: 22, email: 'Joao@teste.com'},
        {id: '3', nome: 'Maria', idade: 12, email: 'Maria@teste.com'},
        {id: '4', nome: 'Felipe', idade: 25, email: 'Felipe@teste.com'},
        {id: '5', nome: 'Fernanda', idade: 25, email: 'Fernanda@teste.com'},
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          renderItem={({item}) => (
            <Pessoa data={item} keyExtrator={(feedId) => feedId.id} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textoPessoa: {
    fontSize: 25,
  },
  areaPessoa: {
    height: 200,
    margin: 20,
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 10,
  },
});

export default App;

class Pessoa extends Component {
  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome} </Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade} </Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email} </Text>
      </View>
    );
  }
}
