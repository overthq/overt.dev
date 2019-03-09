import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';

const AppRouter = () => (
	<Router>
		<Switch>
			<Route path='/' exact component={Landing} />
		</Switch>
	</Router>
);

export default AppRouter;
