import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBioQFfkwb2-CMk-8eoklLOG_pGdDGkSEs",
    authDomain: "tickets-1ab7c.firebaseapp.com",
    projectId: "tickets-1ab7c",
    storageBucket: "tickets-1ab7c.appspot.com",
    messagingSenderId: "839953219621",
    appId: "1:839953219621:web:72996b326211cb9e167fcc",
    measurementId: "G-KRS4N2KF15"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export { auth, db, storage }