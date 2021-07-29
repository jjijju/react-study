import React, { useState, useEffect } from 'react';

const Ex02 = () => {
	const [name, setName] = useState('');
	const [nickname, setNickname] = useState('');

	useEffect(() => {
		console.log('렌더링 완료');
		console.log({
			name,
			nickname,
		});
	});

	const onChnageName = (e) => {
		setName(e.target.value);
	};

	const onChnageNickname = (e) => {
		setNickname(e.target.value);
	};

	return (
		<div>
			<div>
				<input value={name} onChange={onChnageName} />
				<input value={nickname} onChange={onChnageNickname} />
			</div>
			<div>
				<div>
					<b>이름:</b> {name}
				</div>
				<div>
					<b>닉네임:</b> {nickname}
				</div>
			</div>
		</div>
	);
};

export default Ex02;
