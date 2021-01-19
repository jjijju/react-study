import React from 'react';

const MyComponent = ({ name, children }) => {
	return (
		<div>
			새로운 컴포넌트 이름은 {name} <br />
			children 값은 {children}
		</div>
	);
};

MyComponent.defaultProps = {
	name: 'default name',
};

export default MyComponent;
