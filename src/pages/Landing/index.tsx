import React from 'react';
import { useSpring, animated } from 'react-spring';
import classnames from 'classnames';
import { IoLogoGithub, IoLogoTwitter } from 'react-icons/io';

import { Button, Hero, Section, SupportingText, Footer } from './elements';
import { Project } from './components';
import links from './links';
import cls from './Landing.module.scss';
import styles from './styles';
import logo from '../../assets/images/overtlogo.svg';
import auxiliumLogo from '../../assets/images/auxiliumlogo.png';

const Landing = () => {
	const [active, setActive] = React.useState(false);
	const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });
	return (
		<>
			<Section backgroundColor='#FFFFFF'>
				<Hero>
					<div>
						<nav>
							<span
								className={cls.navbarToggle}
								onClick={() => setActive(!active)}
							/>
							<a href='/' className={cls.logo}>
								<img src={logo} alt='' style={{ zoom: 0.07 }} />
							</a>
							<ul
								className={classnames(cls.mainNav, {
									[cls.active]: active
								})}
								id='js-menu'
							>
								{links.map((link, index: number) => (
									<li key={index}>
										<a href={link.url} className={cls.navLinks}>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<animated.div
						className={cls.hero}
						style={styles.heroMain(springProps)}
					>
						<h1 style={{ fontSize: 40, fontWeight: 700 }}>
							The future is open-source.
						</h1>
						<br />
						<SupportingText>
							Overt creates open-source solutions to the world's pressing
							issues.
						</SupportingText>
						<br />
						<br />
						<a
							href='#about-us'
							style={{ textDecoration: 'none', width: '200px' }}
						>
							<Button>Learn More</Button>
						</a>
					</animated.div>
					{/* <div /> */}
				</Hero>
			</Section>
			<Section backgroundColor='#000000' id='about-us'>
				<div style={{ ...styles.aboutUs, ...{ flexDirection: 'column' } }}>
					<div>
						<h2 style={{ ...styles.sectionHeader, ...{ textAlign: 'center' } }}>
							We are building the future.
						</h2>
					</div>
					<br />
					<div style={{ width: '75%', margin: 'auto' }}>
						<p style={styles.sectionParagraph}>
							Open-source software powers a large amount of the world's
							technology. From operating systems to self-driving car software,
							open-source code makes technology accessible to everyone.
						</p>
						<br />
						<p style={styles.sectionParagraph}>
							At Overt, we are building open-source software to solve problems
							we face everyday. We believe in the collaboration of developers
							around the globe, to build the software that will shape tommorrow.
							We are building software for the the people, by the people.
						</p>
					</div>
				</div>
			</Section>
			<Section backgroundColor='#FFFFFF' id='projects'>
				<div style={{ ...styles.aboutUs, ...{ flexDirection: 'column' } }}>
					<div>
						<h1 style={{ ...styles.sectionHeader, ...{ color: '#000000', textAlign: 'center' } }}>
							Our Projects
						</h1>
					</div>
					<br />
					<div style={{ width: '75%', margin: 'auto' }}>
						<Project
							logo={auxiliumLogo}
							link='https://github.com/overthq/Auxilium'
						/>
					</div>
				</div>
			</Section>
			<Footer>
				<div>
					<img src={logo} alt='' style={{ zoom: 0.07, filter: 'invert(1)' }} />
				</div>
				<div>
					<a href="https://www.producthunt.com/posts/overt-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-overt-2" target="_blank">
						<img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=149087&theme=light" alt="Overt - Building the future in the open | Product Hunt Embed" style={{ width: '250px', height: '54px' }} width="250px" height="54px" />
					</a>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						width: '80px'
					}}
				>
					<a href='https://github.com/overthq' className={cls.socialIcon}>
						<IoLogoGithub size={30} />
					</a>
					<a href='https://twitter.com/overt_hq' className={cls.socialIcon}>
						<IoLogoTwitter size={30} />
					</a>
				</div>
			</Footer>
		</>
	);
};

export default Landing;
