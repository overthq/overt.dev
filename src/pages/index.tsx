import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import LearnMore from './LearnMore';
import Projects from './Projects';

const AppRouter = () => (
	<Router>
		<Switch>
			<Route path='/' exact component={Landing} />
			<Route path='/projects' component={Projects} />
			<Route path='/about-us' exact component={LearnMore} />
		</Switch>
	</Router>
);

export default AppRouter;
