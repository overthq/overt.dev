import React from 'react';

const links = {
	GitHub: 'https://github.com/overthq',
	Discord: 'https://discord.gg/t6wVzUh',
	Twitter: 'https://twitter.com/overt_hq',
};

const Home = () => (
	<main
		style={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			maxWidth: 700,
			fontSize: 18,
			fontFamily: 'Georgia',
			margin: '0 auto',
			color: '#2d2d2d',
			lineHeight: '36px',
			paddingLeft: 15,
			paddingRight: 15,
			marginTop: 30,
		}}
	>
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
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${Object.keys(links).length}, 1fr)`,
				gridGap: '10px',
			}}
		>
			{Object.entries(links).map(([name, link]) => (
				<a
					key={name}
					style={{
						textDecoration: 'none',
						borderBottom: '1px dotted #505050',
						color: 'inherit',
						lineHeight: 1,
					}}
					href={link}
				>
					{name}
				</a>
			))}
		</div>
	</main>
);

export default Home;
