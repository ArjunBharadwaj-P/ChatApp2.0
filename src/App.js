import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Imessage from './Imessage';
import './App.css';
import Login from './Login';
import { selectUser, login, logout } from './features/userSlice';
import { auth } from './firebase';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// User is logged in
				dispatch(
					login({
						uid: authUser.uid,
						photo: authUser.photoURL,
						email: authUser.email,
						displayName: authUser.displayName,
					})
				);
			} else {
				// User is logged out
				dispatch(logout());
			}
		});
	}, []);

	return <div className='app'>{user ? <Imessage /> : <Login />}</div>;
}

export default App;
