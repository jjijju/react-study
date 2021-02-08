import React, { Component } from 'react';

import Ex01 from './ex01';
import Ex02 from './ex02';

export default class index extends Component {
	render() {
		return (
			<div>
				<Ex01 />
				<Ex02 ref={(ref) => (this.scrollBox = ref)} />
				<button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
			</div>
		);
	}
}
