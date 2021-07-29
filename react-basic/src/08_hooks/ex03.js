import React, { useState } from 'react';
import Ex02 from './ex02';

const Ex03 = () => {
	const [visible, setvisible] = useState(false);

	return (
		<div>
			<button
				onClick={() => {
					setvisible(!visible);
				}}
			>
				{visible ? '숨기기' : '보이기'}
			</button>
			<br />
			{visible && <Ex02 />}
		</div>
	);
};

export default Ex03;
