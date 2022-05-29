import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Springclass from '../Springclass';

const config = {
    apiKey: "AIzaSyCbDiEiH5_Z1uFXLjWVzUaI2e0LLjdRGdo",
    authDomain: "clothing-store-react-50603.firebaseapp.com",
    projectId: "clothing-store-react-50603",
    storageBucket: "clothing-store-react-50603.appspot.com",
    messagingSenderId: "206582193848",
    appId: "1:206582193848:web:6da1d38aed17276ec69e4d"
  };

  firebase.initializeApp(config);

  export const UserValid =  (user,additonaldata)=>{
    if(!user) return;
    
    Springclass.googleauth(user).then(res=>{console.log(res.data)}).catch(err=>{console.log(err)});
  }


 
  export const auth = firebase.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider);
    };
  
export default firebase;


  