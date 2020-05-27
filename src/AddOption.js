import React, { Component } from 'react';

class AddOption extends Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined,
		};
	}
	handleAddOption(e) {
		e.preventDefault();
		const inputOption = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(inputOption);
		e.target.elements.option.value = '';
		this.setState(() => {
			return { error };
		});
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type='text' name='option'></input>
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

export default AddOption;
