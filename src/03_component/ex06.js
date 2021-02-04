import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ex06 extends Component {
	static propTypes = {
		prop: PropTypes,
	};

	render() {
		const { name, favoriteNumber, children } = this.props;

		return (
			<div>
				제 이름은 {name} <br />
				children 값은 {children} <br />
				좋아하는 번호는 {favoriteNumber}
			</div>
		);
	}
}

ex06.defaultProps = {
	name: '리옉트',
};

ex06.propTypes = {
	name: PropTypes.string,
	favoriteColor: PropTypes.number.isRequired,
};
