import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDcJHouVPo6pOj-2Iem-Zurrv2QwQx7SPU",
    authDomain: "crown-react-88be2.firebaseapp.com",
    databaseURL: "https://crown-react-88be2.firebaseio.com",
    projectId: "crown-react-88be2",
    storageBucket: "crown-react-88be2.appspot.com",
    messagingSenderId: "476532094107",
    appId: "1:476532094107:web:a35cd1bc1ad878d6dd823e",
    measurementId: "G-HDCP8D63G4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;