import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import LoaderPage from './pages/Loader';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/loader" component={LoaderPage} />
			</Switch>
		</Router>
	);
}
