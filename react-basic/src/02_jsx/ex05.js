import React from 'react';

export default function ex05() {
	const name = '리웩트';
	return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>;
}
