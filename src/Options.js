import React, { Component } from 'react';
import Option from './Option';

class Options extends Component {
	handleRemoveAll() {
		alert('All removed');
	}
	render() {
		return (
			<div>
				<button onClick={this.handleRemoveAll}>Remove All</button>
				{this.props.options.map((option) => (
					<Option key={option} optionText={option}></Option>
				))}
			</div>
		);
	}
}

export default Options;
