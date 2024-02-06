import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyD5w_vfzNkYi6bvfZ50pAtJkmmo7rZMjbc",
  authDomain: "tickets-5348f.firebaseapp.com",
  databaseURL: "https://tickets-5348f-default-rtdb.firebaseio.com",
  projectId: "tickets-5348f",
  storageBucket: "tickets-5348f.appspot.com",
  messagingSenderId: "723047905406",
  appId: "1:723047905406:web:f123ca6f44fd3148e3402f",
  measurementId: "G-XS3DLWEBSC"
};

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export { auth, db, storage }