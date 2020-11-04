import React, {useContext} from 'react';

import {AuthContext} from '../../contexts/auth';
import Header from '../../components/Header';

import {Background, Container, Nome, Saldo, Title} from './styles';

const Home = () => {
  const {user} = useContext(AuthContext);
  return (
    <Background>
      <Header />
      <Container>
        <Nome>{user.name}</Nome>
        <Saldo>R$ 525,00</Saldo>
      </Container>

      <Title>Ultimas movimentações</Title>
    </Background>
  );
};

export default Home;
