import React, { Component } from 'react';

export default class ex02 extends Component {
	state = {
		message: '',
	};

	handleChange = (e) => {
		this.setState({
			message: e.target.value,
		});
	};

	handleClick = () => {
		alert(this.state.message);
		this.setState({
			message: '',
		});
	};

	render() {
		return (
			<div>
				<h1>이벤트 연습</h1>
				<input
					type="text"
					name="message"
					placeholder="text 입력"
					value={this.state.message}
					onChnage={this.handleChange}
				/>
				<button onClick={this.handleClick}>확인</button>
			</div>
		);
	}
}
