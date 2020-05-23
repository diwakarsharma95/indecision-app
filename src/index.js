import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//******************Exploring JSX************** */

var app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of computer',
};

var template = (
	<div>
		<h1>{app.title}</h1>
		<p>{app.subtitle}</p>
		<ol>
			<li>Item One</li>
			<li>Item Two</li>
		</ol>
	</div>
);
var user = {
	name: 'Diwakar',
	age: 27,
	location: 'Brisbane',
};

var templateTwo = (
	<div>
		<h1>{user.name}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
);

var appRoot = document.getElementById('root');

ReactDOM.render(template, appRoot);

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
