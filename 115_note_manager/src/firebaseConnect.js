import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBESMEdYVU0uqlX4FY2uxWSvxDPBqgzmvk",
  authDomain: "notemanager-5ae2b.firebaseapp.com",
  databaseURL: "https://notemanager-5ae2b-default-rtdb.firebaseio.com",
  projectId: "notemanager-5ae2b",
  storageBucket: "notemanager-5ae2b.appspot.com",
  messagingSenderId: "1011995383127",
  appId: "1:1011995383127:web:ed1b31f5fc7a8c50355a12",
  measurementId: "G-8QRWMP6B8M"
};
firebase.initializeApp(firebaseConfig);
export const noteData = firebase.database().ref('dataForNote')