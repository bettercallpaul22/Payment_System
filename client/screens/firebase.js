
import { initializeApp } from "firebase/app";
import * as firebase  from "firebase";
import 'firebase/auth'
import 'firebase/firestore'




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpn94wNWqINp_j45ITQdhVGuz6xly_E3Y",
  authDomain: "native--chat.firebaseapp.com",
  projectId: "native--chat",
  storageBucket: "native--chat.appspot.com",
  messagingSenderId: "74928202288",
  appId: "1:74928202288:web:4a91df77a81ccfef8cc3f5"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){

    const app = initializeApp(firebaseConfig);
}else{
    app= firestore.app()
}
const db = app.firestore()
const auth = firebase.auth()
export {db, auth}