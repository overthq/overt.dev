import React from 'react';
import Section from '../components/Section';
import Layout from '../components/Layout';

const Home = () => (
	<Layout>
		<Section>
			<h1>Building the future. In the open.</h1>
			<p>
				The future is open-source. Overt is building solutions to the world's
				pressing issues.
			</p>
			<button>Learn More</button>
		</Section>
		<Section backgroundColor='#FFFFFF' textColor='#000000'>
			<h1>Join the community.</h1>
			<p style={{ maxWidth: 750 }}>
				Our Discord channel is home to a community of developers committed to
				building the future of technology, and the world.
			</p>
			<a href='https://discord.gg' target='_blank' rel='noopener noreferrer'>
				<button>Join our Discord</button>
			</a>
		</Section>
	</Layout>
);

export default Home;
