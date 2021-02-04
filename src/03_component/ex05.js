import React from 'react';
import PropTypes from 'prop-types';

const ex05 = ({ name, children }) => {
	return (
		<div>
			저는 {name} 이고, <br />
			좋아하는 색상은 {children} 입니다.
		</div>
	);
};

ex05.defaultProps = {
	name: '사람',
};

ex05.propTypes = {
	name: PropTypes.string,
};

export default ex05;
