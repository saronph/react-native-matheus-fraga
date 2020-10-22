import React, {Component} from 'react';
import {StyleSheet, View, Text, Animated, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      larAnimada: new Animated.Value(0),
    };

    Animated.timing(this.state.larAnimada, {
      useNativeDriver: false,
      toValue: 100,
      duration: 4000,
    }).start();
  }

  render() {
    let porcentagemAnimate = this.state.larAnimada.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
    });

    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            backgroundColor: '#4169e1',
            width: porcentagemAnimate,
            height: 25,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
