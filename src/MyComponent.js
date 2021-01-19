import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const MyComponent = ({ name, favoriteNumber, children }) => {
// 	return (
// 		<div>
// 			새로운 컴포넌트 이름은 {name} <br />
// 			children 값은 {children} <br />
// 			좋아하는 숫자는 {favoriteNumber}
// 		</div>
// 	);
// };

class MyComponent extends Component {
	// defaultProps와 propTypes를 class 내부에서 설정하는 방법
	// static defaultProps = {
	// 	name: '기본 이름'
	// }

	// static propTypes = {
	// 	name: PropTypes.string,
	// 	favoriteNumber: PropTypes.number.isRequired,
	// }

	render() {
		const { name, favoriteNumber, children } = this.props;
		return (
			<div>
				새로운 컴포넌트 이름은 {name} <br />
				children 값은 {children} <br />
				좋아하는 숫자는 {favoriteNumber}
			</div>
		);
	}
}

MyComponent.defaultProps = {
	name: 'default name',
};

MyComponent.propTypes = {
	name: PropTypes.string,
	favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
