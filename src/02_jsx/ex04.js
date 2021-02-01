import React from 'react';

export default function ex04() {
	const name = '리액트';
	return <div>{name === '리액트' ? <h1>{name}입니다.</h1> : <h2>{name}가 아닙니다.</h2>}</div>;
}
