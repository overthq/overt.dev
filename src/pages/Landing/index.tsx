import React from 'react';
import styled from 'styled-components';
import styles from './Landing.module.scss';
import classnames from 'classnames';
import logo from '../../assets/images/overtlogo.svg';
import { useSpring, animated } from 'react-spring';

const Section = styled.main`
	background-color: ${({ backgroundColor }: { backgroundColor: string }) =>
		backgroundColor};
	min-height: 60vh;
`;

const Hero = styled.div`
	height: 100vh;
	width: 100vw;
	display: grid;
	grid-template-rows: 1fr 2fr 1fr;
`;

const SupportingText = styled.p`
	font-size: 18px;
	max-width: 580px;
	line-height: 1.6;
`;

const Button = styled.button`
	height: 60px;
	width: 200px;
	border-radius: 5px;
	background-color: #000000;
	color: #ffffff;
	font-size: 20px;
	font-weight: bold;
	&:hover {
		cursor: pointer;
		opacity: 0.9;
	}
`;

interface LinkType {
	url: string;
	label: string;
}

const links: LinkType[] = [
	{
		url: 'https://github.com/overthq',
		label: 'GitHub'
	},
	{
		url: '/projects',
		label: 'Projects'
	},
	{
		url: '#about-us',
		label: 'About Us'
	}
];

const NewLanding = () => {
	const [active, setActive] = React.useState(false);
	const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });
	return (
		<>
			<Section backgroundColor="#FFFFFF">
				<Hero>
					<div>
						<nav>
							<span
								className={styles.navbarToggle}
								onClick={() => setActive(!active)}
							/>
							<a href="/" className={styles.logo}>
								<img src={logo} alt="" style={{ zoom: 0.07 }} />
							</a>
							<ul
								className={classnames(styles.mainNav, {
									[styles.active]: active
								})}
								id="js-menu"
							>
								{links.map((link: LinkType, index: number) => (
									<li key={index}>
										<a href={link.url} className={styles.navLinks}>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<animated.div
						className={styles.hero}
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							...springProps
						}}
					>
						<h1 style={{ fontSize: 40 }}>The future is open-source.</h1>
						<br />
						<SupportingText>
							Overt creates open-source solutions to the world's pressing
							issues.
						</SupportingText>
						<br />
						<br />
						<a
							href="#about-us"
							style={{ textDecoration: 'none', width: '200px' }}
						>
							<Button>Learn More</Button>
						</a>
					</animated.div>
					<div />
				</Hero>
			</Section>
			<Section backgroundColor="#000000" id="about-us">
				<div
					style={{
						flexDirection: 'column',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-around',
						height: '100%',
						width: '100%',
						padding: '40px 0 40px 0',
						minHeight: '60vh'
					}}
				>
					<div style={{}}>
						<h1 style={{ color: '#FFFFFF', fontSize: 40, textAlign: 'center' }}>
							We are building the future.
						</h1>
					</div>
					<br />
					<div style={{ width: '75%', margin: 'auto' }}>
						<p
							style={{
								fontSize: 20,
								color: '#FFFFFF',
								lineHeight: 1.5
							}}
						>
							Open-source software powers a large amount of the world's
							technology. From operating systems to self-driving car software,
							open-source code makes technology accessible to everyone.
						</p>
						<br />
						<p
							style={{
								fontSize: 20,
								color: '#FFFFFF',
								lineHeight: 1.5
							}}
						>
							Open-source software powers a large amount of the world's
							technology. From operating systems to self-driving car software,
							open-source code makes technology accessible to everyone.
						</p>
					</div>
				</div>
			</Section>
		</>
	);
};

export default NewLanding;
