import React, { useState } from 'react';

const Say = () => {
	const [message, setMessage] = useState('');
	const onclickEnter = () => setMessage('안녕하세요');
	const onclickLeave = () => setMessage('안녕히 가세요');

	return (
		<div>
			<button onClick={onclickEnter}>입장</button>
			<button onClick={onclickLeave}>퇴장</button>
			<h1>{message}</h1>
		</div>
	);
};

export default Say;
