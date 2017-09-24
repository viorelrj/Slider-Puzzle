import React, { Component } from 'react';

class Block extends Component {
	render() {
		let content = (this.props.id !== 0)? this.props.id : "player";

		return(
			<div className="block">
				{content}
			</div>
		)
	}
}

export default Block;