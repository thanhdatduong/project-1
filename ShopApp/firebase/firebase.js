import {initializeApp} from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  //read data from Firebase
} from 'firebase/auth';
//ref = reference to a "collection"
import {
  getDatabase,
  ref as firebaseDatabaseRef,
  set as firebaseSet,
  child,
  get,
  onValue,
} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCVz4asmiXqOq5xIOJZVvULe30yi116DoY',
  authDomain: 'doanchuyennganh-82be0.firebaseapp.com',
  databaseURL:
    'https://doanchuyennganh-82be0-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'doanchuyennganh-82be0',
  storageBucket: 'doanchuyennganh-82be0.appspot.com',
  appId: '1:409284540362:android:55915b4de8332fcf62c133',
  messagingSenderId: '409284540362',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseDatabase = getDatabase();
export {
  auth,
  firebaseDatabase,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  firebaseSet,
  firebaseDatabaseRef,
  sendEmailVerification,
  child,
  get,
  onValue, //tải lại khi DB trực tuyến thay đổi
  signInWithEmailAndPassword,
};
