import React, { Component } from 'react';
import Option from './Option';

class Options extends Component {
	render() {
		return (
			<div>
				{this.props.options.map((option) => (
					<Option key={option} optionText={option}></Option>
				))}
			</div>
		);
	}
}

export default Options;
