import React from 'react';

const ex04 = (props) => {
	const { name, children } = props;
	return (
		<div>
			저는 {name} 이고, <br />
			좋아하는 색상은 {children} 입니다.
		</div>
	);
};

ex04.defaultProps = {
	name: '사람',
};

export default ex04;
