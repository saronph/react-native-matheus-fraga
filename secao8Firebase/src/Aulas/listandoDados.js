import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import firebase from './src/firebaseConnection';

import Listagem from './src/components/Listagem';

const App = () => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function dados() {
      await firebase
        .database()
        .ref('usuarios')
        .on('value', (snapshot) => {
          setUsuarios([]);

          snapshot.forEach((childItem) => {
            let data = {
              key: childItem.key,
              name: childItem.val().name,
              cargo: childItem.val().cargo,
            };

            setUsuarios((oldArray) => [...oldArray, data].reverse());
            setLoading(false);
          });
        });
    }
    dados();
  }, []);

  async function cadastrar() {
    if (nome !== '' && cargo !== '') {
      let usuarios = await firebase.database().ref('usuarios');
      let chave = usuarios.push().key;

      usuarios.child(chave).set({
        name: nome,
        cargo: cargo,
      });

      alert('Cadastrado com sucesso');
      setCargo('');
      setNome('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Insira seu nome</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setNome(texto)}
        value={nome}
      />

      <Text style={styles.texto}>Insira seu cargo</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={(texto) => setCargo(texto)}
        value={cargo}
      />

      <Button title="Novo Funcionário" onPress={cadastrar} />

      {loading ? (
        <ActivityIndicator color="#121212" size={45} />
      ) : (
        <FlatList
          keyExtractor={(item) => item.key}
          data={usuarios}
          renderItem={({item}) => <Listagem data={item} />}
        />
      )}
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
