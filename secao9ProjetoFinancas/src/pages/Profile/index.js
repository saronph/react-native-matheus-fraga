import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';

import {Container, Nome, NewLink, NewText, Logout, LogoutText} from './styles';

import {AuthContext} from '../../contexts/auth';

const Profile = () => {
  const navigation = useNavigation();
  const {user, signOut} = useContext(AuthContext);

  return (
    <Container>
      <Header />
      <Nome>{user.name}</Nome>

      <NewLink onPress={() => navigation.navigate('New')}>
        <NewText>Registrar gastos</NewText>
      </NewLink>

      <Logout onPress={() => signOut()}>
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
};

export default Profile;
