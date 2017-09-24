import React, { Component } from 'react';

import Block from './block.js';

class Row extends Component {
	render() {
		console.log(this.props);
		let row = this.props.row;
		let blocks = row.map((item, i) =>
			<Block
				id={item}
				key={i}
			/>
		)

		return(
			<div className="row">
				{blocks}
			</div>
		)
	}
}

export default Row;