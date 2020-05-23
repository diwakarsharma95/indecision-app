import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//******************Exploring JSX************** */

var template = (
	<div>
		<h1>Indecision App</h1>
		<p>This is some info</p>
		<ol>
			<li>Item One</li>
			<li>Item Two</li>
		</ol>
	</div>
);

var templateTwo = (
	<div>
		<h1>Diwakar Sharma</h1>
		<p>Age: 26</p>
		<p>Location: Brisbane</p>
	</div>
);

var appRoot = document.getElementById('root');

ReactDOM.render(templateTwo, appRoot);

//********************************************** */

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root'),
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
