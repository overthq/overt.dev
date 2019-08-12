import React from 'react';
import Head from 'next/head';
import cls from '../styles/auxilium-landing-styles.css';

const AuxiliumLanding = () => (
	<>
		<Head>
			<title>Auxilium</title>
			<meta name='title' content='Auxilium — Save lives. Report emergencies.' />
			<meta name='description' content='Save lives. Report emergencies.' />
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
		<nav className={cls.landingNav}>
			<div className={cls.landingNavContainer}>
				<img src='/static/images/auxiliumNewLogo.png' alt='Auxilium Logo' />
			</div>
		</nav>
		<section className={cls.hero}>
			<div className={cls.heroContainer}>
				<div className={cls.heroInformation}>
					<h1 className={cls.heroMainText}>
						<span style={{ color: '#505050' }}>Save lives.</span>
						<br />
						<span style={{ color: '#FF8282' }}>Report emergencies</span>
					</h1>
					<p className={cls.heroSupportingText}>
						Awareness about an ongoing emergency is critical to survival of
						those involved. Auxilium helps you notify people or get notified
						about emergencies in your vicinity.
					</p>
					<form
						className={cls.heroForm}
						name='waitlist'
						method='POST'
						data-netlify='true'
					>
						<input type='hidden' name='form-name' value='waitlist' />
						<input
							className={cls.heroInput}
							type='email'
							name='email'
							placeholder='Your email address'
						/>
						<button className={cls.heroActionButton} type='submit'>
							Get early access
						</button>
					</form>
				</div>
				<div className={cls.heroInformation} style={{ marginTop: -150 }}>
					<img
						alt='App demo'
						src='/static/images/auxiliumDemo.png'
						className={cls.heroDemoImage}
					/>
				</div>
			</div>
		</section>
	</>
);

export default AuxiliumLanding;
