import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

//************************************************************/

// class App extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.handleOne = this.handleOne.bind(this);
// 		this.handleMinusOne = this.handleMinusOne.bind(this);
// 		this.handleReset = this.handleReset.bind(this);
// 		this.state = {
// 			count: 0,
// 		};
// 	}
// 	handleOne() {
// 		this.setState((prevState) => {
// 			return {
// 				count: prevState.count + 1,
// 			};
// 		});
// 	}
// 	handleMinusOne() {
// 		this.setState((prevState) => {
// 			return {
// 				count: prevState.count - 1,
// 			};
// 		});
// 	}
// 	handleReset() {
// 		this.setState(() => {
// 			return {
// 				count: 0,
// 			};
// 		});
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>Count: {this.state.count}</h1>
// 				<button onClick={this.handleOne}>+1</button>
// 				<button onClick={this.handleMinusOne}>-1</button>
// 				<button onClick={this.handleReset}>reset</button>
// 			</div>
// 		);
// 	}
// }

//*************************************************************/
class Toggle extends Component {
	constructor(props) {
		super(props);
		this.btnClicked = this.btnClicked.bind(this);
		this.state = {
			show: 'Show details',
			hide: 'Hide details',
			status: true,
		};
	}

	btnClicked() {
		this.setState((prevState) => {
			return {
				status: !prevState.status,
			};
		});
	}
	render() {
		return (
			<div>
				<h1>Visibility Toggle</h1>
				<button onClick={this.btnClicked}>
					{this.state.status === true ? this.state.show : this.state.hide}
				</button>
				{this.state.status === true ? null : <p>Hey. These are some details you can see now!</p>}
			</div>
		);
	}
}
export default Toggle;
//************************************************************/

// function App() {
// 	const title = 'Indecision';
// 	const subtitle = 'Put your life in the hands of a computer.';
// 	const options = ['Thing one', 'Thing two', 'Thing three'];
// 	return (
// 		<div>
// 			<Header title={title} subtitle={subtitle}></Header>
// 			<Action></Action>
// 			<Options options={options}></Options>
// 			<AddOption></AddOption>
// 		</div>
// 	);
// }

// export default App;
