import * as firebase from 'firebase';

const env = process.env;

const config = {
  apiKey: env.REACT_APP_FIREBASE_APIKEY,
  authDomain: env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: env.REACT_APP_FIREBASE_SENDERID
};

firebase.initializeApp(config);