import React from 'react';
import Section, { SplitSection } from '../components/Section';
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
		<SplitSection backgroundColor='#FFFFFF' textColor='#000000'>
			<div />
			<div>
				<h2>Solve real-world problems.</h2>
				<p>
					Fields like public transportation, security, emergency reporting and
					several others face problems that can be solved by technology. Working
					on the solutions to these problems not only allows us to create great
					software, it makes us an active part of building the future of the
					world and technology.
				</p>
			</div>
		</SplitSection>
		<SplitSection backgroundColor='#FFFFFF' textColor='#000000'>
			<div>
				<h2>Make money</h2>
				<p>
					You earn for your contributions to these solutions. You get paid for
					converting ideas into lines of code.
				</p>
			</div>
			<div />
		</SplitSection>
		<Section backgroundColor='#FFFFFF' textColor='#000000'>
			<h2>Join the community.</h2>
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
