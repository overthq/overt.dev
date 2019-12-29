import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

const FooterContainer = styled.footer`
	background-color: #000000;
	padding: 100px 60px;
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
		title: 'Community',
		options: [
			{
				link: 'https://discord.gg',
				label: 'Discord'
			},
			{
				link: 'https://twitter.com',
				label: 'Twitter'
			}
		]
	},
	{
		title: 'Our Work',
		options: [
			{
				link: 'https://github.com/overthq',
				label: 'GitHub'
			},
			{
				link: '/case-studies',
				label: 'Case Studies'
			}
		]
	},
	{
		title: 'Support',
		options: [
			{
				link: '/faq',
				label: 'FAQ'
			},
			{
				link: '/contact-us',
				label: 'Contact Us'
			}
		]
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

const FooterSection = styled.div`
	h4 {
		font-size: 1.2rem;
		font-family: Courier;
		color: #ffffff;
		margin-bottom: 0.5rem;
	}

	li {
		margin-bottom: 2px;
	}

	a {
		color: #ffffff;
		text-decoration: none;
	}
`;

const Footer = () => (
	<FooterContainer>
		<div>
			<Logo src='/static/images/overtlogo.svg' alt='Overt Logo' />
			<p style={{ color: '#FFFFFF', textAlign: 'center' }}>&copy; 2020</p>
		</div>
		{footerSections.map(({ title, options }, index) => (
			<FooterSection key={index}>
				<h4 style={{ color: '#FFFFFF' }}>{title}</h4>
				<ul style={{ listStyle: 'none' }}>
					{options.map(({ link, label }) => (
						<li key={label} style={{ color: '#FFFFFF', fontSize: 16 }}>
							<a href={link}>{label}</a>
						</li>
					))}
				</ul>
			</FooterSection>
		))}
		<SocialLinks />
	</FooterContainer>
);

export default Footer;
