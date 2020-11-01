import React, {useState, useContext} from 'react';

import {AuthContext} from '../../contexts/auth';

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from './styles';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user} = useContext(AuthContext);

  console.log(user);

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
};

export default SignUp;
