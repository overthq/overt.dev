import React from 'react';
import styled from 'styled-components';
import { IoLogoGithub } from 'react-icons/io';

const Wrapper = styled.div`
	height: 250px;
	width: 250px;
	border-radius: 4px;
	padding: 10px;
	box-shadow: 0px 9px 20px 1px rgba(211, 211, 211, 1);
`;

const Support = styled.a`
	color: #505050;
	&:hover {
		text-decoration: none;
		cursor: pointer;
	}
	&:visited {
		color: #505050;
	}
`;

export interface IProjectProps {
	name: string;
	description: string;
	githubURL: string;
}

const Project = (props: IProjectProps) => {
	const { name, description, githubURL } = props;
	return (
		<Wrapper>
			<h2>{name}</h2>
			<br />
			<p>{description}</p>
			<br />
			<Support href={githubURL}>
				<IoLogoGithub size={50} />
			</Support>
		</Wrapper>
	);
};

export default Project;
