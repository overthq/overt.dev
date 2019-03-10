import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 250px;
	height: 250px;
	border-radius: 4px;
	background-color: #ffffff;
`;

interface IProjectProps {
	link: string;
}

const Project = (props: IProjectProps) => (
	<a href={props.link}>
		<Wrapper />
	</a>
);

export default Project;
