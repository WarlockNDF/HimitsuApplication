import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA8kVk86DFrbXqW4KAkqKFGUopeptpunLA",
    authDomain: "logisticite.firebaseapp.com",
    projectId: "logisticite",
    storageBucket: "logisticite.appspot.com",
    messagingSenderId: "143152671435",
    appId: "1:143152671435:web:91d1e0cc66caf8dafd094e",
    measurementId: "G-XE8DJ8FB1M"
  };

if(!firebase.apps.length){
    firebase.default.initializeApp(firebaseConfig);
}

export default firebase.default;