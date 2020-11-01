import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: 'AIzaSyBjviVcIgu52QGu56ZiI9-dqW_G-aBVy24',
  authDomain: 'tasks-6334c.firebaseapp.com',
  databaseURL: 'https://tasks-6334c.firebaseio.com',
  projectId: 'tasks-6334c',
  storageBucket: 'tasks-6334c.appspot.com',
  messagingSenderId: '734374806831',
  appId: '1:734374806831:web:8193d8b78998b3aab24dda',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
