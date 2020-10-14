import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Picker} from '@react-native-community/picker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      dadosPizza: [
        {key: 1, nome: 'Calabresa', valor: 35.0},
        {key: 2, nome: 'Portuguesa', valor: 32.0},
        {key: 3, nome: '5 Queijos', valor: 40.0},
        {key: 4, nome: 'Strogonoff', valor: 45.0},
      ],
    };
  }
  render() {
    let dadosPizza = this.state.dadosPizza.map((value, key) => {
      return <Picker.Item key={key} value={key} label={value.nome} />;
    });

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({pizza: itemValue})
          }>
          {dadosPizza}
        </Picker>

        <Text style={styles.pizzas}>
          Você escolheu: {this.state.dadosPizza[this.state.pizza].nome}
        </Text>
        <Text style={styles.pizzas}>
          R$: {this.state.dadosPizza[this.state.pizza].valor.toFixed(2)}
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
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center',
  },
});

export default App;
