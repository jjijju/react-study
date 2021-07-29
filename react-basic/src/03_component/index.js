import React from 'react';

import Ex01 from './ex01';
import Ex02 from './ex02';
import Ex03 from './ex03';
import Ex04 from './ex04';
import Ex05 from './ex05';
import Ex06 from './ex06';
import Ex07 from './ex07';
import Ex08 from './ex08';

const Index = () => {
	return (
		<div>
			<Ex01 />
			<Ex02 />
			<Ex03>리액트</Ex03>
			<Ex04>흰색</Ex04>
			<Ex05 name={3}>흰색</Ex05>
			<Ex06 name="react">하하하</Ex06>
			<Ex07 />
			<Ex08 />
		</div>
	);
};

export default Index;
