import styled from 'styled-components';

interface SectionProps {
	backgroundColor?: string;
	textColor?: string;
}

const Section = styled.section<SectionProps>(
	props => `
	background-color: ${props.backgroundColor || '#000000'};
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 60px 20px;
	color: ${props.textColor || '#ffffff'};

	h1 {
		font-size: 3rem;
		margin: 1rem 0;
		text-align: center;
	}

	h2 {
		font-size: 2.75rem;
		margin: 1rem 0;
		text-align: center;
	}

	p {
		font-size: 1.5rem;
		text-align: center;
		margin-bottom: 2rem;
		line-height: 2rem;
	}

	button {
		padding: 0.8rem 2rem;
		background-color: ${props.textColor || '#ffffff'};
		color: ${props.backgroundColor || '#000000'};
		border: none;
		font-size: 1.2rem;
		font-family: 'Courier Prime', monospace;
		text-transform: uppercase;
		border: 2px solid ${props.textColor || '#ffffff'};
		transition: background-color 200ms linear;

		&:hover {
			cursor: pointer;
			background-color: ${props.backgroundColor || '#000000'};
			color: ${props.textColor || '#ffffff'};
		}
	}
`
);

export const SplitSection = styled(Section)`
	p {
		max-width: 500px;
		margin: 0 auto 2rem;
	}

	@media only screen and (min-width: 501px) {
		flex-direction: row;
		& > div {
			padding: 0 60px;
			flex: 1;
		}
	}
`;

export default Section;
