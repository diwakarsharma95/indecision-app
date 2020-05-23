import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//************************************************************ */

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of computer',
	options: [],
};

const onFormSubmit = (e) => {
	e.preventDefault();
	const option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
};
const removeAll = () => {
	app.options = [];
	render();
};
const appRoot = document.getElementById('root');
const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
			<p>{app.options.length}</p>
			<button onClick={removeAll}>Remove All</button>
			<ol>
				<li>Item one</li>
				<li>Item two</li>
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type='text' name='option' />
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
};

render();
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
