import React from 'react';
import { Helmet } from 'react-helmet';
import './styles.css';
import auxiliumLogo from '../../assets/images/auxiliumNewLogo.png';
import auxiliumDemo from '../../assets/images/auxiliumDemo.png';

const AuxiliumLanding = () => {
	return (
		<>
			<Helmet>
				<title>Auxilium</title>
				<meta
					name='title'
					content='Auxilium — Save lives. Report emergencies.'
				/>
				<meta name='description' content='Save lives. Report emergencies.' />

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
			</Helmet>
			<nav className='landing-nav'>
				<div className='landing-nav-container'>
					<img src={auxiliumLogo} alt='Auxilium Logo' />
				</div>
			</nav>
			<section className='hero'>
				<div className='hero-container'>
					<div className='hero-information'>
						<h1 className='hero-main-text'>
							<span style={{ color: '#505050' }}>Save lives.</span>
							<br />
							<span style={{ color: '#FF8282' }}>Report emergencies</span>
						</h1>
						<p className='hero-supporting-text'>
							Awareness about an ongoing emergency is critical to survival of
							those involved. Auxilium helps you notify people or get notified
							about emergencies in your vicinity.
						</p>
						<form
							className='hero-form'
							name='waitlist'
							method='POST'
							data-netlify='true'
						>
							<input type='hidden' name='form-name' value='waitlist' />
							<input
								className='hero-input'
								type='email'
								name='email'
								placeholder='Your email address'
							/>
							<button className='hero-action-button' type='submit'>
								Get early access
							</button>
						</form>
					</div>
					<div className='hero-information' style={{ marginTop: -150 }}>
						<img
							alt='App demo'
							src={auxiliumDemo}
							className='hero-demo-image'
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default AuxiliumLanding;
