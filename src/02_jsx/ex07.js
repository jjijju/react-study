import React from 'react';

export default function ex07() {
	const name = '리액트';
	const style = {
		backgroundColor: 'black',
		color: 'aqua',
		fontSize: '48px',
		fontWeight: 'bold',
		padding: 16,
	};

	return <div style={style}>{name}</div>;
}
