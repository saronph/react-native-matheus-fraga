import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TaskList = ({data}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{marginRight: 10}}>
        <Icon name="delete" color="#fff" size={20} />
      </TouchableOpacity>

      <View style={{paddingRight: 10}}>
        <Text style={{paddingRight: 10, color: '#fff'}}>{data.nome}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#121212',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});

export default TaskList;
