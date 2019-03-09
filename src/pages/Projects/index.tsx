import React from 'react';
import projects from './projects';
import Project from './Project';

const Projects = () => (
	<main style={{ padding: 50 }}>
		<h1>Our Projects</h1>
		<br />
		<div>
			{projects.map((project, index) => (
				<Project key={index} {...project} />
			))}
		</div>
	</main>
);

export default Projects;
