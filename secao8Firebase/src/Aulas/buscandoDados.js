import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import firebase from './src/firebaseConnection';

const App = () => {
  const [name, setName] = useState('Carregando...');
  const [idade, setIdade] = useState('');

  useEffect(() => {
    async function dados() {
      // .on fica olhando sempre a DB, pode perder performace
      await firebase
        .database()
        .ref('usuarios/1')
        .on('value', (snapshot) => {
          setName(snapshot.val().name);
          setIdade(snapshot.val().idade);
        });

      // .once só pesquisa uma vez, precisando ser atualizado
      // await firebase
      //   .database()
      //   .ref('name')
      //   .once('value', (snapshot) => {
      //     setName(snapshot.val());
      //   });
    }
    dados();
  }, []);

  return (
    <View>
      <Text>Olá {name}</Text>
      <Text>Sua idade é {idade}</Text>
    </View>
  );
};

export default App;
