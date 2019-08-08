import React from 'react';
import './styles.css';
import auxiliumDemo from '../../assets/images/auxiliumDemo.png';

const AuxiliumLanding = () => {
	return (
		<>
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
							the people involved. Auxilium helps you notify people or get
							notified about emergencies in your vicinity.
						</p>
						<button className='hero-action-button'>Get early access</button>
					</div>
					<div className='hero-information'>
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
