import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import firebase from './src/firebaseConnection';

const App = () => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');

  useEffect(() => {
    async function dados() {
      //Criar um (nó) - Atualiza caso mude o valor de 'set'
      // await firebase.database().ref('tipo').set('Cliente');
      //Remover um nó
      // await firebase.database().ref('tipo').remove();
      // Add nova info em um nó existente - Tem que passar todas as infos, se faltar alguma exclui
      // await firebase.database().ref('usuarios').child(3).set({
      //   name: 'Jaco',
      //   cargo: 'maraja',
      // });
      // Atualiza sem risco de exclusão
      // await firebase.database().ref('usuarios').child(3).update({
      //   name: 'Medeiros',
      // });
    }
    dados();
  }, []);

  async function cadastrar() {
    if (nome !== '' && cargo !== '') {
      let usuarios = await firebase.database().ref('usuarios');
      let chave = usuarios.push().key;

      console.log(nome, cargo);

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
