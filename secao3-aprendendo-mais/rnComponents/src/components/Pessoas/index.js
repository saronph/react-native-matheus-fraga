import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Pessoas extends Component {
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

const styles = StyleSheet.create({
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

export default Pessoas;
