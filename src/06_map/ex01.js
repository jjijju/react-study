import React from 'react';

const ex01 = () => {
	const names = ['아메리카노', '카푸치노', '에스프레소', '유자라떼'];
	const nameList = names.map((name, index) => <li key={index}>{name}</li>);

	return <ul>{nameList}</ul>;
};

export default ex01;
