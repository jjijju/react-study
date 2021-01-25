import React, { Component } from 'react';

class EventPractice extends Component {
	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input
					type="text"
					name="message"
					placeholder="아무말"
					onChange={(e) => {
						console.log(e.target.value);
					}}
				/>
			</div>
		);
	}
}

export default EventPractice;
