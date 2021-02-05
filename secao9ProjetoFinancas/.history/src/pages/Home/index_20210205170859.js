import React, {useContext, useState, useEffect} from 'react';
import firebase from '../../services/firebaseConnection';
import {AuthContext} from '../../contexts/auth';
import Header from '../../components/Header';
import Historico from '../../components/Historico';
import {format, isBefore} from 'date-fns';
import {Alert, Platform, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import DatePicker from '../../components/DatePicker';

import {Background, Container, Nome, Saldo, Title, List, Area} from './styles';
import {onChange} from 'react-native-reanimated';

const Home = () => {
  // 10:40
  const [historico, setHistorico] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [newDate, setNewDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const {user} = useContext(AuthContext);
  const uid = user && user.uid;

  useEffect(() => {
    async function loadList() {
      await firebase
        .database()
        .ref('users')
        .child(uid)
        .on('value', (snapshot) => {
          setSaldo(snapshot.val().saldo);
        });

      await firebase
        .database()
        .ref('historico')
        .child(uid)
        .orderByChild('date')
        .equalTo(format(newDate, 'dd/MM/yyyy'))
        .limitToLast(10)
        .on('value', (snapshot) => {
          setHistorico([]);

          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              tipo: childItem.val().tipo,
              valor: childItem.val().valor,
              date: childItem.val().date,
            };

            setHistorico((oldArray) => [...oldArray, list].reverse());
          });
        });
    }
    loadList();
  }, [newDate]);

  function handleDelete(data) {
    const [diaItem, mesItem, anoItem] = data.date.split('/');
    const dateItem = new Date(`${anoItem}/${mesItem}/${diaItem}`);

    const formatDiaHoje = format(new Date(), 'dd/MM/yyyy');
    const [diaHoje, mesHoje, anoHoje] = formatDiaHoje.split('/');
    const dateHoje = new Date(`${anoHoje}/${mesHoje}/${diaHoje}`);

    if (isBefore(dateItem, dateHoje)) {
      alert('Você não pode excluir um registro antigo');
      return;
    }
    Alert.alert(
      'Cuidado!',
      `Você tem certeza que quer excluir o ${data.tipo} - Valor: ${data.valor} ?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => handleDeleteSuccess(data),
        },
      ],
    );
  }

  async function handleDeleteSuccess(data) {
    await firebase
      .database()
      .ref('historico')
      .child(uid)
      .child(data.key)
      .remove()
      .then(async () => {
        let saldoAtual = saldo;
        data.tipo === 'despesa'
          ? (saldoAtual += parseFloat(data.valor))
          : (saldoAtual -= parseFloat(data.valor));

        await firebase
          .database()
          .ref('users')
          .child(uid)
          .child('saldo')
          .set(saldoAtual);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleShowPicker() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  const onChange = (date) => {
    setShow(Platform.OS === 'ios');
    setNewDate(date);
    console.log(date);
  };

  return (
    <Background>
      <Header />
      <Container>
        <Nome>{user && user.name}</Nome>
        <Saldo>
          R$ {saldo.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
        </Saldo>
      </Container>

      <Area>
        <TouchableOpacity onPress={handleShowPicker}>
          <Icon name="event" color="#ffffff" size={30} />
        </TouchableOpacity>
        <Title>Ultimas movimentações</Title>
      </Area>

      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (
          <Historico data={item} deleteItem={handleDelete} />
        )}
      />

      {show && (
        <DatePicker onClose={handleClose} date={newDate} onChange={onChange} />
      )}
    </Background>
  );
};

export default Home;
