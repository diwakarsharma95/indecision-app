import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			title: 'Indecision',
			subtitle: 'Put your life in the hands of a computer.',
			options: [],
		};
	}
	handleDeleteOptions() {
		this.setState(() => {
			return {
				options: [],
			};
		});
	}
	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}
	handleAddOption(option) {
		if (!option) {
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists';
		}
		this.setState((prevState) => {
			return {
				options: prevState.options.concat(option),
			};
		});
	}
	render() {
		return (
			<div>
				<Header title={this.state.title} subtitle={this.state.subtitle}></Header>
				<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}></Action>
				<Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}></Options>
				<AddOption handleAddOption={this.handleAddOption}></AddOption>
			</div>
		);
	}
}

export default App;
