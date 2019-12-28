import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { IoLogoGithub } from 'react-icons/io';

const Wrapper = styled.div`
	height: 300px;
	max-width: 900px;
	display: flex;
	flex-direction: row;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 6px 4px 100px rgba(0, 0, 0, 0.25);
	margin: auto;
	margin-top: 20px;
	margin-bottom: 20px;
	@media (max-width: 768px) {
		flex-direction: column;
		height: 500px;
	}
`;

const Half = styled.div<{ backgroundColor: string; logo?: string }>`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 25px 5px;
	align-items: center;
	background-color: ${({ backgroundColor }) => backgroundColor};
	background-image: ${({ logo }) => `url(${logo})`};
	background-repeat: no-repeat;
	background-position: center;
	height: 100%;
	width: 50%;
	h2 {
		font-size: 2rem;
		color: #505050;
	}
	p {
		font-size: 1.2rem;
		color: #505050;
	}
	img {
		width: 75%;
	}
	@media (max-width: 768px) {
		height: 50%;
		width: 100%;
	}
`;

const Button = styled.a<{ backgroundColor: string }>`
	padding: 0.8rem 2rem;
	display: flex;
	align-items: center;
	border-radius: 4px;
	text-decoration: none;
	font-size: 1.2rem;
	color: #ffffff;
	background-color: ${({ backgroundColor }) => backgroundColor};
	transition: background-color 0.5s ease-in-out;
	&:hover {
		background-color: ${({ backgroundColor }) => darken(0.02, backgroundColor)};
		cursor: pointer;
	}
	& > *:first-child {
		margin-right: 10px;
	}
`;

interface IProjectProps {
	name: string;
	link: string;
	logo: string;
	description: string;
	themeColor: string;
}

const Project = ({
	name,
	link,
	logo,
	description,
	themeColor
}: IProjectProps) => (
	<Wrapper>
		<Half backgroundColor={themeColor}>
			<img src={logo} alt={name} />
		</Half>
		<Half backgroundColor='#FFFFFF'>
			<h2>{name}</h2>
			<p>{description}</p>
			<Button href={link} backgroundColor={themeColor}>
				<IoLogoGithub size={25} />
				GitHub
			</Button>
		</Half>
	</Wrapper>
);

export default Project;
