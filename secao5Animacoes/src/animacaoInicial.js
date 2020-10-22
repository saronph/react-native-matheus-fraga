import React, {Component} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      larAnimada: new Animated.Value(150),
      altAnimada: new Animated.Value(50),
    };

    Animated.timing(this.state.larAnimada, {
      useNativeDriver: false,
      toValue: 300,
      duration: 2000,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            width: this.state.larAnimada,
            height: this.state.altAnimada,
            backgroundColor: '#4169e1',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#ffff', fontSize: 22, textAlign: 'center'}}>
            Carregando...
          </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
