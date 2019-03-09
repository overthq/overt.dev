import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
	height: 100vh;
	width: 100vw;
	padding: 20px;
`;

const LearnMore = () => (
	<Wrapper>
		<h1 style={{ fontSize: '40px' }}>We're building the future in the open</h1>
		<br />
		<p>
			Most of the technology that powers the world's largest companies are
			written in the open.
		</p>
		<br />
		<p>
			Overt is an open-source organization, dedicated to building lasting
			solutions to the problems that the world faces today.
		</p>
		<br />
	</Wrapper>
);

export default LearnMore;
