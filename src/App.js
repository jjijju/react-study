import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import InterationSample from './InterationSample';

// import Jsx from './02_jsx';
// import Components from './03_component';
class App extends Component {
	render() {
		return (
			<div>
				<MyComponent name="React" favoriteNumber={9} />
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
				<br />
				<InterationSample />
			</div>
		);
	}
}

export default App;
