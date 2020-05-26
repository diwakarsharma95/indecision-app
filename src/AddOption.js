import React, { Component } from 'react';

class AddOption extends Component {
	handleAddOption(e) {
		e.preventDefault();
		const inputOption = e.target.elements.option.value;
		if (inputOption.trim()) {
			alert(inputOption);
			e.target.elements.option.value = '';
		}
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type='text' name='option'></input>
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

export default AddOption;
