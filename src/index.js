import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import About from './views/About';
import Inbox from './views/Inbox';



import { Router, Route, browserHistory} from 'react-router'

ReactDOM.render(
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
	      <Route path="about" component={About} />
	      <Route path="inbox" component={Inbox} />
	    </Route>
  	</Router>, document.getElementById('root'));
registerServiceWorker();
