import React from 'react';
import Landing from './Landing';
import AuxiliumLanding from './Auxilium';

import { BrowserRouter, Route } from 'react-router-dom';

export default () => (
	<BrowserRouter>
		<Route exact path='/' component={Landing} />
		<Route exact path='/auxilium' component={AuxiliumLanding} />
	</BrowserRouter>
);
