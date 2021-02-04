import React, { Component } from 'react';

export default class ex01 extends Component {
	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input
					type="text"
					name="message"
					placeholder="text 입력"
					onChnage={(e) => {
						console.log(e);
					}}
				/>
			</div>
		);
	}
}
