import styled from 'styled-components';

export const Section = styled.div`
	background-color: ${({ backgroundColor }: { backgroundColor: string }) =>
		backgroundColor};
	min-height: 60vh;
`;

export const Hero = styled.div`
	min-height: 100vh;
	width: 100vw;
	display: grid;
	grid-template-rows: 1fr 4fr 1fr;
`;

export const SupportingText = styled.p`
	font-size: 20px;
	max-width: 600px;
	line-height: 1.6;
	margin-bottom: 4rem;
`;

export const Button = styled.a`
	height: 60px;
	width: 200px;
	border-radius: 4px;
	background-color: #000000;
	color: #ffffff;
	font-size: 20px;
	padding: 1rem 2rem;
	font-weight: bold;
	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
`;

export const Footer = styled.div`
	height: 100px;
	background-color: #000000;
	width: 100vw;
	padding: 10px 20px 10px 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-between;
`;
