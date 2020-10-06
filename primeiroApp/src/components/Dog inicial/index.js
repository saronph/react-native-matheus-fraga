import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class Dog extends Component {
  render() {
    let img =
      'https://blog.emania.com.br/wp-content/uploads/2019/01/como-tirar-foto-de-cachorro.jpg';

    return (
      <View>
        <Image
          source={{uri: img}}
          style={{
            width: this.props.largura,
            height: this.props.altura,
            marginTop: 20,
          }}
        />
        <Text>{this.props.nome}</Text>
      </View>
    );
  }
}

export default Dog;
