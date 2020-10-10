import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box4} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    backgroundColor: 'red',
    height: 250,
    width: 150,
  },
  box2: {
    backgroundColor: 'yellow',
    height: 250,
    width: 150,
  },
  box3: {
    backgroundColor: 'blue',
    height: 250,
    width: 150,
  },
  box4: {
    backgroundColor: 'green',
    height: 250,
    width: 150,
  },
});

export default App;
