import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
	background-color: #000000;
	padding: 20px;
`;

const Logo = styled.img`
	width: 100px;
	height: auto;
	filter: invert(1);
`;

const Footer = () => (
	<FooterWrapper>
		<div>
			<Logo src='/static/images/overtlogo.svg' alt='Overt Logo' />
			<p style={{ color: '#FFFFFF' }}>&copy; 2020</p>
		</div>
	</FooterWrapper>
);

export default Footer;
