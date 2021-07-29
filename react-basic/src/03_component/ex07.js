import React, { Component } from 'react';

export default class ex07 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0,
			fixedNumber: 0,
		};
	}

	render() {
		const { number, fixedNumber } = this.state;
		return (
			<div>
				<h1>{number}</h1>
				<h2>{fixedNumber}</h2>
				<button
					onClick={() => {
						this.setState({ number: number + 1 });

						this.setState((prevState) => {
							return {
								number: prevState.number + 1,
							};
						});

						this.setState((prevState) => ({
							number: prevState.number + 1,
						}));

						this.setState(
							{
								number: number + 1,
							},
							() => {
								console.log('setState가 호출되었습니다.');
								console.log(this.state);
							},
						);
					}}
				>
					+1
				</button>
			</div>
		);
	}
}
