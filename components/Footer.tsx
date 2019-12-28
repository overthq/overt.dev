import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

const FooterContainer = styled.footer`
	background-color: #000000;
	padding: 100px 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const Logo = styled.img`
	width: 100px;
	height: auto;
	filter: invert(1);
`;

const footerSections = [
	{
		title: 'Product'
	},
	{
		title: ''
	},
	{
		title: ''
	}
];

const SocialLink = styled.a`
	color: #ffffff;
	&:visited {
		color: #ffffff;
	}
`;

const links = [
	{
		icon: FaGithub,
		href: 'https://github.com/overthq'
	},
	{
		icon: FaTwitter,
		href: 'https://twitter.com/overt_hq'
	},
	{
		icon: FaDiscord,
		href: 'https://discord.gg'
	}
];

const SocialLinksContainer = styled.div`
	display: flex;
	color: #ffffff;
	& > *:not(last-of-type) {
		margin-right: 10px;
	}
`;

const SocialLinks = () => (
	<SocialLinksContainer>
		{links.map(({ icon, href }, index) => (
			<SocialLink
				key={index}
				href={href}
				target='_blank'
				rel='noopener noreferrer'
			>
				{React.createElement(icon, { size: 24 })}
			</SocialLink>
		))}
	</SocialLinksContainer>
);

const Footer = () => (
	<FooterContainer>
		<div>
			<Logo src='/static/images/overtlogo.svg' alt='Overt Logo' />
			<p style={{ color: '#FFFFFF', textAlign: 'center' }}>&copy; 2020</p>
		</div>
		{footerSections.map(({ title }, index) => (
			<div key={index}>
				<h5 style={{ color: '#FFFFFF' }}>{title}</h5>
			</div>
		))}
		<SocialLinks />
	</FooterContainer>
);

export default Footer;
