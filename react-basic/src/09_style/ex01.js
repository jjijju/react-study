import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
	background: ${(props) => props.color || 'blue'};
	padding: 1rem;
	display: flex;
`;

const Ex01 = () => {
	return <Box color="black">안녕하세요</Box>;
};

export default Ex01;
