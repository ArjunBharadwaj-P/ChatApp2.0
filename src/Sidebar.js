import React, { useEffect, useState } from 'react';
// Files
import './Sidebar.css';
import SidebarChat from './SidebarChat';
// Material UI
import { Avatar, Button, IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import db, { auth } from './firebase';

function Sidebar() {
	const user = useSelector(selectUser);
	const [chats, setChats] = useState([]);

	useEffect(() => {
		db.collection('chats').onSnapshot((snapshot) =>
			setChats(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		);
	}, []);

	const addChat = () => {
		const chatName = prompt('Please enter a chat name');

		if (chatName) {
			db.collection('chats').add({
				chatName: chatName,
			});
		}
	};

	return (
		<div className='sidebar'>
			<div className='sidebar__header'>
				<Avatar src={user.photo} className='sidebar__avatar' />
				<h4>{user.displayName}</h4>
				<Button className='sidebar__signOut' onClick={() => auth.signOut()}>
					Logout
				</Button>
				<IconButton variant='outlined' className='sidebar__inputButton'>
					<AddCircleIcon onClick={addChat} />
				</IconButton>
			</div>

			<div className='sidebar__chat'>
				{chats.map(({ id, data: { chatName } }) => (
					<SidebarChat key={id} id={id} chatName={chatName} />
				))}
			</div>
		</div>
	);
}

export default Sidebar;
