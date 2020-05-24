import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//************************************************************ */

// const app = {
// 	title: 'Indecision App',
// 	subtitle: 'Put your life in the hands of computer',
// 	options: [],
// };

// const onFormSubmit = (e) => {
// 	e.preventDefault();
// 	const option = e.target.elements.option.value;
// 	if (option) {
// 		app.options.push(option);
// 		e.target.elements.option.value = '';
// 		render();
// 	}
// };
// const onRemoveAll = () => {
// 	app.options = [];
// 	render();
// };

// const onMakeDecision = () => {
// 	const randomNum = Math.floor(Math.random() * app.options.length);
// 	const option = app.options[randomNum];
// 	alert(option);
// };

// const appRoot = document.getElementById('root');

// const render = () => {
// 	const template = (
// 		<div>
// 			<h1>{app.title}</h1>
// 			{app.subtitle && <p>{app.subtitle}</p>}
// 			<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
// 			<button disabled={app.options.length === 0} onClick={onMakeDecision}>
// 				What should I do ?
// 			</button>
// 			<button onClick={onRemoveAll}>Remove All</button>

// 			<ol>
// 				{app.options.map((option) => (
// 					<li key={option}>{option}</li>
// 				))}
// 			</ol>
// 			<form onSubmit={onFormSubmit}>
// 				<input type='text' name='option' />
// 				<button>Add Option</button>
// 			</form>
// 		</div>
// 	);

// 	ReactDOM.render(template, appRoot);
// };

// render();

//*************************Challenge***************************/

const btnValue = {
	show: 'Show details',
	hide: 'Hide details',
	status: true,
};

const btnClicked = () => {
	btnValue.status = !btnValue.status;
	render();
};

const appRoot = document.getElementById('root');

const render = () => {
	const template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={btnClicked}>{btnValue.status === true ? btnValue.show : btnValue.hide}</button>
			{btnValue.status === true ? null : <p>Hey. These are some details you can see now!</p>}
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
