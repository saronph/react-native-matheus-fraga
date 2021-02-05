import React, {useState} from 'react';
import {View, Text, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import {Container, Header} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function DatePicker() {
  const [dateNow, setDateNow] = useState(new Date());

  function Alert() {
    alert(dateNow);
  }
  return (
    <Container>
      {Platform.OS === 'ios' && (
        <Header>
          <TouchableOpacity onPress={() => {}}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </Header>
      )}
      <DateTimePicker
        value={dateNow}
        mode="date"
        display="default"
        // onChange={(event, date) => {

        // }}
        style={{backgroundColor: 'white'}}
      />
    </Container>
  );
}
