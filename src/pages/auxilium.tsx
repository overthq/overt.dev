import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const HeroActionButton = styled.button`
	padding: 1rem 1.5rem;
	font-size: 1.125rem;
	font-weight: 700;
	color: #ffffff;
	background-color: #ff8282;
	border: none;
	border-radius: 4px;
	margin-top: 10px;
	transition: background-color 0.25s ease;

	&:hover {
		cursor: pointer;
		background-color: #fa6b6b;
	}

	&:focus {
		outline: none;
	}
`;

const LandingNav = styled.nav`
	width: 72rem;
	max-width: 72rem;
	padding: 0 1rem;
	margin: auto;

	div {
		height: 4.75rem;
	}
`;

const Hero = styled.section`
	width: 100vw;
	max-width: 72rem;
	padding: 8rem 1rem 0;
	margin: 0 auto;
	box-sizing: border-box;

	.heroContainer {
		display: flex;
		margin: 0;
		padding: 0;

		.heroInformation {
			width: 48%;
			font-family: Karla;
			h1 {
				font-size: 3rem;
				margin-bottom: 1.5rem;
			}
			p {
				font-size: 1.125rem;
				color: #777777;
				margin-bottom: 2rem;
				width: 90%;
			}
		}
	}
`;

const HeroDemoImage = styled.img`
	max-height: 700px;
	object-fit: fill;
	display: block;
	margin: auto;
`;

const HeroForm = styled.form`
	display: flex;
	flex-direction: column;
	height: 8rem;
	width: 300px;

	.heroInput {
		padding: 1rem 1.5rem;
		border: 0.5px solid #d3d3d3;
		border-radius: 4px;
		font-size: 1.125rem;
		font-family: Karla;
		text-align: center;
	}
`;

const AuxiliumLanding = () => (
	<>
		<Head>
			<title>Auxilium</title>
			<meta name='title' content='Auxilium — Save lives. Report emergencies.' />
			<meta name='description' content='Save lives. Report emergencies.' />
			<link rel='shortcut icon' href='/static/auxilium-favicon.ico' />
			<link
				href='https://fonts.googleapis.com/css?family=Karla:400,700'
				rel='stylesheet'
			/>

			<meta name='twitter:card' content='summary' />
			<meta name='twitter:title' content='Auxilium' />
			<meta
				name='twitter:description'
				content='Save lives. Report emergencies.'
			/>
			<meta property='twitter:url' content='https://overt.dev/auxilium' />

			<meta name='og:title' content='Auxilium' />
			<meta name='og:description' content='Save lives. Report emergencies.' />
			<meta name='og:image' content='https://overt.dev/logo.png' />
			<meta name='og:url' content='https://overt.dev/auxilium' />
			<meta name='og:site_name' content='Auxilium' />
			<meta name='og:type' content='website' />
		</Head>
		<LandingNav>
			<div>
				<img src='/static/images/auxiliumNewLogo.png' alt='Auxilium Logo' />
			</div>
		</LandingNav>
		<Hero>
			<div className='heroContainer'>
				<div className='heroInformation'>
					<h1>
						<span style={{ color: '#505050' }}>Save lives.</span>
						<br />
						<span style={{ color: '#FF8282' }}>Report emergencies</span>
					</h1>
					<p>
						Awareness about an ongoing emergency is critical to survival of
						those involved. Auxilium helps you notify people or get notified
						about emergencies in your vicinity.
					</p>
					<HeroForm name='waitlist' method='POST' data-netlify='true'>
						<input type='hidden' name='form-name' value='waitlist' />
						<input
							className='heroInput'
							type='email'
							name='email'
							placeholder='Your email address'
						/>
						<HeroActionButton type='submit'>Get early access</HeroActionButton>
					</HeroForm>
				</div>
				<div className='heroInformation' style={{ marginTop: -150 }}>
					<HeroDemoImage alt='App demo' src='/static/images/auxiliumDemo.png' />
				</div>
			</div>
		</Hero>
	</>
);

export default AuxiliumLanding;
