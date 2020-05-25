import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

function App() {
	const title = 'Indecision';
	const subtitle = 'Put your life in the hands of a computer.';
	const options = ['Thing one', 'Thing two', 'Thing three'];
	return (
		<div>
			<Header title={title} subtitle={subtitle}></Header>
			<Action></Action>
			<Options options={options}></Options>
			<AddOption></AddOption>
		</div>
	);
}

export default App;
