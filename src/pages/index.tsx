import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import NoMatch from './NoMatch';

const AppRouter = () => (
	<Router>
		<Switch>
			<Route path='/' exact component={Landing} />
			<Route component={NoMatch} />
		</Switch>
	</Router>
);

export default AppRouter;
