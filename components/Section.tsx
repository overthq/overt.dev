import React from 'react';
import styled from 'styled-components';

interface SectionProps {
	backgroundColor?: string;
	textColor?: string;
}

const SectionContainer = styled.section<SectionProps>(
	props => `
	background-color: ${props.backgroundColor || '#000000'};
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 60px 0;
	color: ${props.textColor || '#ffffff'};

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
		background-color: ${props.textColor || '#ffffff'};
		color: ${props.backgroundColor || '#000000'};
		border: none;
		margin-top: 2rem;
		font-size: 1rem;

		&:hover {
			cursor: pointer;
		}
	}
`
);

const Section = () => (
	<SectionContainer>
		<h1>Building the future. In the open.</h1>
		<p>
			The future is open-source. Overt is building solutions to the world's
			pressing issues.
		</p>
		<button>Learn More</button>
	</SectionContainer>
);

export default Section;

