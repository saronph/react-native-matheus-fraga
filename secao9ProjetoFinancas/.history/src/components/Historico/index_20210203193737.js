import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Tipo, IconView, TipoText, ValorText} from './styles';

const Historico = ({data}) => {
  return (
    <TouchableWithoutFeedback>
      <Container>
        <Tipo>
          <IconView tipo={data.tipo}>
            <Icon
              name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'}
              color="#ffffff"
              size={20}
            />
            <TipoText>{data.tipo}</TipoText>
          </IconView>
        </Tipo>
        <ValorText>R$ {data.valor}</ValorText>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Historico;
