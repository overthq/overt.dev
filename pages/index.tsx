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

			a {
				text-decoration: none;
				border-bottom: 1px dotted #505050;
				color: inherit;
				line-height: 18px;
			}

			.link {
				margin: 0 15px;
			}
		`}</style>
		<Head>
			<title>Overt | The future is open-source.</title>
		</Head>
		<p>
			In today's world, most innovative software is hidden as proprietary
			software, to ensure that it maintains its monopolistic value to its
			creators, or the corporation behind it. This is understandable, since
			software is valuable, and this is the preferred business model for most
			software-based corporations. However, it also stifles collaboration,
			transparency and innovation.
		</p>
		<p>
			A great number of the advances in software over the past decades would
			have been impossible if not for the power of open source software.
			Projects like <a href='https://linux.org'>Linux</a> and{' '}
			<a href='https://git-scm.com'>Git</a>, which power a large number of
			software systems are testaments to this fact. In fact, hardly any code
			would be tangible, without the solid foundation built by open-source
			software, as virtually every mainstream programming language is
			open-source. Building in the open provides access to contributions from
			people from all over the world, who bring their different perspectives and
			experiences to create powerful solutions to important problems.
		</p>
		<p>
			Overt is a project that aims to create communities around building
			open-source software to solve important and difficult real-world problems.
			Its main premise is the belief that the collaboration of developers around
			the globe, will produce software that will shape the future. We are
			building the future, in the open.
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
