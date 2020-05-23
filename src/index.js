import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//******************Exploring JSX************** */

var app = {
	title: 'Indecision App',
	// subtitle: 'Put your life in the hands of computer',
	options: ['One', 'Two'],
};

var template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		{app.options && app.options.length > 0 ? (
			<div>
				<p>Here are your options</p>
				<ol>
					<li>Item {app.options[0]}</li>
					<li>Item {app.options[1]}</li>
				</ol>
			</div>
		) : (
			'No Options'
		)}
	</div>
);
var user = {
	name: 'Diwakar',
	age: 17,
	location: 'Brisbane',
};

const getLocation = (props) => {
	if (props) {
		return <p>Location: {props}</p>;
	}
};

var templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{user.age && user.age >= 18 && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
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
