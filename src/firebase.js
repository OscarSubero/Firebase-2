//import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';

//import 'firebase/firestore';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyDsbPcQfTYdp4P529t5SHGbBJFNw-5T4qI',
	authDomain: 'fir-16910-final.firebaseapp.com',
	projectId: 'fir-16910-final',
	storageBucket: 'fir-16910-final.appspot.com',
	messagingSenderId: '247813522556',
	appId: '1:247813522556:web:c3aa59a143ca414bf975f9',
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

// Y ahora utilizamos su método llamado firestore, lo ejecutamos y lo guardamos
// dentro de una constante llamada db. También debemos exportar

export const db = fb.firestore();
