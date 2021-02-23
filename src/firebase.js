import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCKyz7I6i2NQF0E8UxNCg3J8zinLcwqVCQ',
	authDomain: 'arjuns-chat-app.firebaseapp.com',
	projectId: 'arjuns-chat-app',
	storageBucket: 'arjuns-chat-app.appspot.com',
	messagingSenderId: '768086006984',
	appId: '1:768086006984:web:b2ffa39a8c8ef8f55d99fd',
	measurementId: 'G-VFE2RCE2W5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
