import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from 'react-native';
import firebase from './src/firebaseConnection';

import TaskList from './src/components/TaskList';

const App = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      await firebase
        .database()
        .ref('tarefas')
        .on('value', (snapshot) => {
          setTasks([]);

          snapshot.forEach((childItem) => {
            let data = {
              key: childItem.key,
              nome: childItem.val().nome,
            };

            setTasks((oldArray) => [...oldArray, data]);
          });
        });
    }
    loadTasks();
  }, []);

  async function handleAdd() {
    if (newTask !== '') {
      let tarefas = await firebase.database().ref('tarefas');
      let chave = tarefas.push().key;

      tarefas.child(chave).set({
        nome: newTask,
      });

      Keyboard.dismiss();
      setNewTask('');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTask}>
        <TextInput
          style={styles.input}
          placeholder="Qual a tarefa de hoje?"
          underlineColorAndroid="transparent"
          onChangeText={(texto) => setNewTask(texto)}
          value={newTask}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => <TaskList data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  containerTask: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 40,
    fontSize: 17,
  },
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#121212',
    paddingLeft: 14,
    paddingRight: 14,
    marginLeft: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 25,
  },
});

export default App;
