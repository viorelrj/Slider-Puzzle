import React, { Component } from 'react';

import Block from './block.js';

class Row extends Component {
	render() {
		const listenClick = this.props.listenClick;
		const rowCounter = this.props.rowCounter;

		let row = this.props.row;
		let blocks = row.map((item, i) =>
			<Block
				listenClick={listenClick}
				rowCounter={rowCounter}
				blockCounter={i}
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