import React from 'react';
import './Login.css';
import logo from './images/logo.png';
import { auth, provider } from './firebase';
import { Button } from '@material-ui/core';

function Login() {
	const signIn = () => {
		auth.signInWithPopup(provider).catch((error) => alert(error.message));
	};

	return (
		<div className='login'>
			<div className='login__logo'>
				<h1>Welcome to my chat app</h1>
			</div>
			<Button onClick={signIn}>Sign in with google</Button>
		</div>
	);
}

export default Login;
