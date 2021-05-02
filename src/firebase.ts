import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyB6_tDdR5fwmRAbUQPa9JIjB765WxLkm6U",
    authDomain: "auth-production-c4c87.firebaseapp.com",
    projectId: "auth-production-c4c87",
    storageBucket: "auth-production-c4c87.appspot.com",
    messagingSenderId: "36630722117",
    appId: "1:36630722117:web:162c0cb4ef84141056d52c"
});

export const auth = app.auth();
export default app;