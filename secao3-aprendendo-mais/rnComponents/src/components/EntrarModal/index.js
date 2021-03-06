import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class EntrarModal extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#292929',
          width: '100%',
          height: 350,
          borderRadius: 15,
        }}>
        <Text style={{color: '#fff', fontSize: 25, textAlign: 'center'}}>
          Seja bem vindo!
        </Text>
        <Button title="Sair" onPress={this.props.fechar} />
      </View>
    );
  }
}
