import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	background-color: #000000;
	padding: 20px;
	display: flex;
	justify-content: space-around;
`;

const Logo = styled.img`
	width: 100px;
	height: auto;
	filter: invert(1);
`;

const Footer = () => (
	<FooterContainer>
		<div>
			<Logo src='/static/images/overtlogo.svg' alt='Overt Logo' />
			<p style={{ color: '#FFFFFF', textAlign: 'center' }}>&copy; 2020</p>
		</div>
	</FooterContainer>
);

export default Footer;
