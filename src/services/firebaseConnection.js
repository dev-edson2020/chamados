import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDPXyujw-69OO6mstLGXpc8xI3bZHPEcJ4",
  authDomain: "chamados-65027.firebaseapp.com",
  projectId: "chamados-65027",
  storageBucket: "chamados-65027.appspot.com",
  messagingSenderId: "261971905315",
  appId: "1:261971905315:web:5dbcc4222d85bdbc065a96",
  measurementId: "G-TXTZ3DX4YT"
};

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  export { auth, db, storage }