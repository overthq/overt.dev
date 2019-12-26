import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
	background-color: #000000;
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 60px 0;
	color: #ffffff;

	h1 {
		font-size: 3rem;
		margin: 1rem 0;
		text-align: center;
	}

	p {
		font-size: 1.2rem;
	}

	button {
		padding: 0.8rem 2rem;
		background-color: #ffffff;
		border: none;
		margin-top: 2rem;
		font-size: 1rem;

		&:hover {
			cursor: pointer;
		}
	}
`;

const Header = () => (
	<HeaderContainer>
		<h1>Building the future. In the open.</h1>
		<p>
			The future is open-source. Overt is building solutions to the world's
			pressing issues.
		</p>
		<button>Learn More</button>
	</HeaderContainer>
);

export default Header;
