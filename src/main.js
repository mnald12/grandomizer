import { createApp } from 'vue'
import App from './App.vue'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDFOinuSdrU2qarijmhfEFi06M_6xbaJv4',
  authDomain: 'grandomizer-c41d4.firebaseapp.com',
  projectId: 'grandomizer-c41d4',
  storageBucket: 'grandomizer-c41d4.appspot.com',
  messagingSenderId: '534882432378',
  appId: '1:534882432378:web:48be3b4f490c21524192c3',
  measurementId: 'G-TD36KFJ1N9'
};

firebase.initializeApp(firebaseConfig)

createApp(App).mount('#app')
