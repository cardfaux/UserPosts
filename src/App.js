import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Users from './pages/Users';

const App = () => {
	return (
		<Router>
			<Route path='/' exact component={Users} />
		</Router>
	);
};

export default App;
