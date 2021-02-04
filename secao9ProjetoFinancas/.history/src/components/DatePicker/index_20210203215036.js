import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DatePicker() {
  const [dateNow, setDateNow] = useState(new Date());
  return (
    <Container>
      <DateTimePicker
        value={dateNow}
        model="date"
        display="default"
        // onChange={(event, date) => {

        // }}
        style={{backgroundColor: 'white'}}
      />
    </Container>
  );
}
