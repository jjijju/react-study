import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';

const App = () => {
	return (
		<div>
			<MyComponent name="React" favoriteNumber={9}>
				리액트
			</MyComponent>
			<Counter />
			<Say />
			<EventPractice />
			<ValidationSample />
		</div>
	);
};

export default App;
