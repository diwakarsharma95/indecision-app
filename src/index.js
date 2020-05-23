import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//************************************************************ */

const app = {
	title: 'Indecision App',
	// subtitle: 'Put your life in the hands of computer',
	options: ['One', 'Two'],
};

const template = (
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

//************************************************************* */

let count = 0;
const addOne = () => {
	console.log('addOne');
};
const minusOne = () => {
	console.log('removeOne');
};
const setupReset = () => {
	console.log('reset');
};

const templateTwo = (
	<div>
		<h1>Count: {count}</h1>
		<button onClick={addOne} className='class'>
			+1
		</button>
		<button onClick={minusOne} className='class'>
			-1
		</button>
		<button onClick={setupReset} className='class'>
			reset
		</button>
	</div>
);

const appRoot = document.getElementById('root');

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
