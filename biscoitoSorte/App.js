import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

import Biscoito from './src/assets/biscoito.png';
import BiscoitoAberto from './src/assets/biscoitoAberto.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: Biscoito,
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'A solidão é a sorte de todos os espíritos excepcionais.',
      'Não ser amado é falta de sorte, mas não amar é a própria infelicidade.',
      'Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.',
      'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.',
      'Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.',
      'A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.',
      'Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.',
      'A perseverança é a mãe da boa sorte.',
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '" ' + this.frases[numeroAleatorio] + ' "',
      img: BiscoitoAberto,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Quebrar o biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
