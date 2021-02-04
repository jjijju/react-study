import React, { useState } from 'react';

const Ex04 = () => {
	const [form, setForm] = useState({
		username: '',
		message: '',
	});
	const { username, message } = form;
	const onChnage = (e) => {
		const nextForm = {
			...form,
			[e.target.name]: e.target.value,
		};
		setForm(nextForm);
	};
	const onClick = () => {
		alert(username + ': ' + message);
		setForm({
			username: '',
			message: '',
		});
	};
	const onKeyPress = (e) => {
		if (e.key === 'enter') {
			onClick();
		}
	};

	return (
		<div>
			<h1>이벤트 연습</h1>
			<input type="text" name="username" placeholder="사용자명" value={username} onChnage={onChnage} />
			<input
				type="text"
				name="message"
				placeholder="메세지"
				value={message}
				onChnage={onChnage}
				onKeyPress={onKeyPress}
			/>
			<button onClick={onClick}>확인</button>
		</div>
	);
};

export default Ex04;
