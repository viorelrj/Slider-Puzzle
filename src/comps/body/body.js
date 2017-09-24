import React, { Component } from 'react';

import './body.css'

import Row from './row.js';

class Body extends Component {
	render() {
		let board = this.props.board;
		let rows= board.map((item, i) => 
			<Row 
				row={item}
				key={i}
			/>
		);

		return(
			<div className="body">
				{rows}
			</div>
		)
	}
}

export default Body;