import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

//configs pegas no site clicar no projeto e engrenagem, projeto feito na opção web
let firebaseConfig = {
  apiKey: 'AIzaSyDvMzULjxkKYsRwSc1No7kCAEgikRf9B4w',
  authDomain: 'fir-8f5bb.firebaseapp.com',
  databaseURL: 'https://fir-8f5bb.firebaseio.com',
  projectId: 'fir-8f5bb',
  storageBucket: 'fir-8f5bb.appspot.com',
  messagingSenderId: '262633911750',
  appId: '1:262633911750:web:5d2e58fe6814cd390ceec7',
  measurementId: 'G-ECWRK3C3PJ',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
