import Button from '../components/Button';
import About from '../views/About';
import Inbox from '../views/Inbox';
import App from '../App';
import {Route} from 'react-router';
import React from 'react';

let routes = 	<Route path="/" component={App}>
					<Route path="button" component={Button} />
					<Route path="about" component={About} />
					<Route path="inbox" component={Inbox} />
				</Route>;

export default routes