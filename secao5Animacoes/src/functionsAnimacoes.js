import React, {Component} from 'react';
import {StyleSheet, View, Text, Animated, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      altAnimada: new Animated.Value(35),
      OpAnimada: new Animated.Value(0),
    };

    this.carregarGrafico = this.carregarGrafico.bind(this);
  }

  carregarGrafico() {
    Animated.sequence([
      Animated.timing(this.state.OpAnimada, {
        useNativeDriver: false,
        toValue: 1,
        duration: 400,
      }),
      Animated.timing(this.state.altAnimada, {
        useNativeDriver: false,
        toValue: 300,
        duration: 1000,
      }),
    ]).start();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: '#4169e1',
          }}>
          <TouchableOpacity onPress={this.carregarGrafico}>
            <Text style={{fontSize: 25, color: '#ffff'}}>Carregar grafico</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text>Vendas</Text>
          <Animated.View
            style={{
              width: this.state.larAnimada,
              height: this.state.altAnimada,
              backgroundColor: '#ff0000',
              justifyContent: 'center',
              opacity: this.state.OpAnimada,
            }}>
            <Text style={{color: '#ffff', fontSize: 22, textAlign: 'center'}}>
              R$ 150,00
            </Text>
          </Animated.View>
        </View>
      </View>
    );
  }
}
