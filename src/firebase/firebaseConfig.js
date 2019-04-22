// eslint-disable-next-line import/no-extraneous-dependencies
import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID,
};

firebase.initializeApp(config);

// DATABASE
// eslint-disable-next-line import/prefer-default-export
export const db = firebase.database();
