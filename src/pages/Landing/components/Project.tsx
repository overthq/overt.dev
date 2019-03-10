import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: 250px;
	border-radius: 4px;
	background-color: #ffffff;
	background-image: ${({ logo }: { logo: string }) => `url(${logo})`};
	background-repeat: no-repeat;
	background-position: center;
	transition: opacity 0.5s ease-in-out;
	&:hover {
		opacity: 0.8;
	}
`;

interface IProjectProps {
	link: string;
	logo: string;
}

const Project = (props: IProjectProps) => (
	<a href={props.link}>
		<Wrapper logo={props.logo} />
	</a>
);

export default Project;
