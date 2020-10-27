import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import firebase from './src/firebaseConnection';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  async function logar() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        alert('Seja bem vindo: ' + value.user.email);
        setUser(value.user.email);
      })
      .catch((error) => {
        alert('Ocorreu um erro no login');
        return;
      });

    setEmail('');
    setPassword('');
  }

  async function logout() {
    await firebase.auth().signOut();
    alert('Deslogado');
    setUser('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Insira seu email</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setEmail(texto)}
        value={email}
      />

      <Text style={styles.texto}>Insira seu password</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setPassword(texto)}
        value={password}
      />

      <Button title="Logar" onPress={logar} />

      <Text>{user}</Text>

      {user !== '' && <Button title="Deslogar" onPress={logout} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  texto: {
    fontSize: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 40,
    fontSize: 17,
  },
});

export default App;
