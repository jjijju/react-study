import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import InterationSample from './InterationSample';
class App extends Component {
	render() {
		return (
			<div>
				<MyComponent />
				<br />
				<Counter />
				<br />
				<Say />
				<br />
				<EventPractice />
				<br />
				<ValidationSample />
				<br />
				<ScrollBox ref={(ref) => (this.scrollBox = ref)} />
				<button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
				<br />
				<InterationSample />
			</div>
		);
	}
}

export default App;
