import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Message.css';

const Message = forwardRef(
	(
		{ id, contents: { timestamp, displayName, email, message, photo, uid } },
		ref
	) => {
		const user = useSelector(selectUser);
		return (
			<div
				ref={ref}
				className={`message ${user.email === email && 'message__sender'}`}
			>
				<Avatar className='message__name' src={photo} />
				<h4 className='message__name'>{displayName}</h4>
				<p>{message}</p>
				<small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
			</div>
		);
	}
);

export default Message;