import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
{
    apiKey: "AIzaSyBuGrn9i1CMNX8chebZotBLFCyLEX_4tjA",
    authDomain: "ecommerce-db-76053.firebaseapp.com",
    databaseURL: "https://ecommerce-db-76053.firebaseio.com",
    projectId: "ecommerce-db-76053",
    storageBucket: "ecommerce-db-76053.appspot.com",
    messagingSenderId: "891149679364",
    appId: "1:891149679364:web:078f6a76152da95f256e51",
    measurementId: "G-EZ1RM6F2TF"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) =>  {
    if (!userAuth) return;

   

    const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();
   

    if(!snapShot.exists) {
     const {displayName, email} = userAuth;
     const createdAt = new Date();


     try {
     await userRef.set({
       displayName,
       email,
       createdAt,
       ...additionalData
     })
     }
     catch (error) {
        console.log(error.message);
     }

    
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //set up google sign in method

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;