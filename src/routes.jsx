import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ProtectedRoute from './protectedRoute';
import HomePage from './pages/Home';
import LoaderPage from './pages/Loader';
import UserPage from './pages/User';
import LoginPage from './pages/Login';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/loader" component={LoaderPage} />
				<Route exact path="/login" component={LoginPage} />
				<ProtectedRoute exact path="/user" component={UserPage} />
			</Switch>
		</Router>
	);
}
