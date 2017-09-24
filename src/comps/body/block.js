import React, { Component } from 'react';

class Block extends Component {
	sendClick() {
		this.props.listenClick({
			row: this.props.rowCounter,
			block: this.props.blockCounter
		})
	}

	render() {
		let content = (this.props.id !== 0)? this.props.id : "player";

		return(
			<div className="block" onMouseUp={this.sendClick.bind(this)}>
				{content}
			</div>
		)
	}
}

export default Block;