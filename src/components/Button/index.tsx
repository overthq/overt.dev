import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 250px;
  height: 50px;
  border-radius: 25px;
  background-color: #ffffff;
  color: #000000;
  border: none;
  font-family: IBM Plex Mono;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &:focus {
    outline: none;
  }
`;

interface ButtonProps {
	title: string;
	onClick?: () => void;
	link?: string;
}

export default ({ title, onClick, link }: ButtonProps) => (
	<a href={link} style={{ textDecoration: 'none' }} {...{ onClick }}>
		<Wrapper>{title}</Wrapper>
	</a>
);
