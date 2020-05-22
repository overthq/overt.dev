import React from 'react';
import Head from 'next/head';

const links = {
	GitHub: 'https://github.com/overthq',
	Discord: 'https://discord.gg/t6wVzUh',
	Twitter: 'https://twitter.com/overt_hq',
};

const Home = () => (
	<main>
		<style jsx global>{`
			main {
				max-width: 700px;
				width: 100%;
				margin: 0 auto;
				font-size: 18px;
				font-family: Georgia;
				color: #2d2d2d;
				line-height: 36px;
				padding: 0 15px;
				overflow-y: scroll;
			}

			.links-container {
				display: flex;
				justify-content: center;
				margin: 20px 0;
			}

			.link {
				text-decoration: none;
				border-bottom: 1px dotted #505050;
				color: inherit;
				line-height: 18px;
				margin: 0 15px;
			}
		`}</style>
		<Head>
			<title>Overt | The future is open-source.</title>
		</Head>
		<p>
			Open-source software powers a large amount of the world's technology. From
			operating systems to self-driving car software, open-source code makes
			technology accessible to everyone.
		</p>
		<p>
			Proprietary software stands in the way of the collaboration and innovation
			that is undoubtedly required to solve humanity's problems. We believe that
			the solving these problems is not a task that can be accomplished by a
			single entity.
		</p>
		<p>
			At Overt, we are building open-source software to solve problems we face
			everyday. We believe in the collaboration of developers around the globe,
			to build the software that will shape tomorrow. We are building software
			for the the people, by the people.
		</p>
		<div className='links-container'>
			{Object.entries(links).map(([name, link]) => (
				<a key={name} className='link' href={link}>
					{name}
				</a>
			))}
		</div>
	</main>
);

export default Home;
