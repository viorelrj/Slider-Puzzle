import React, { Component } from 'react';

//Import slef modules
import './App.css';

//Import components
import Body from './body/body.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			board: [[3, 2, 1], [4, 5, 6], [7, 8, 0]],
			player: {}
		}
	}

	findPlayer(){
		for (let i = 0 ; i < this.state.board.length; i++) {
			for (let j = 0; j < this.state.board[i].length; j++){
				if (this.state.board[i][j] === 0) {
					return {
						row: i,
						block: j
					}
				}
			}
		}
	}

	reArrange(direction) {
		let state = this.state;
		let player = state.player;

		switch(direction){
			case "left":
				if (player.block > 0) {
					let leftBlock = state.board[player.row][player.block - 1];
					state.board[player.row].splice(player.block - 1, 1, 0);
					state.board[player.row][player.block] = leftBlock;
					state.player.block--;
					this.setState(state);
				}
				break;

			case "right":
				if (player.block < this.state.board.length -1) {
					let rightBlock = state.board[player.row][player.block + 1];
					state.board[player.row].splice(player.block + 1, 1, 0);
					state.board[player.row][player.block] = rightBlock;
					state.player.block++;
					this.setState(state);
				}
				break;
			case "up": 
				if (player.row > 0) {
					let upperBlock = state.board[player.row-1][player.block];
					state.board[player.row-1].splice(player.block, 1 , 0);
					state.board[player.row][player.block] = upperBlock;
					state.player.row--;
					this.setState(state);
				}
				break;
			case "down":
				if (player.row < this.state.board.length -1) {
					let lowerBlock = state.board[player.row + 1][player.block];
					state.board[player.row+1].splice(player.block, 1, 0);
					state.board[player.row][player.block] = lowerBlock;
					state.player.row++;
					this.setState(state);
				}
				break;
			default:
				return null;
		}
	}

	listenKeys(){
		let reArrange = this.reArrange.bind(this);
		document.onkeydown = function(evt) {
			switch(evt.keyCode){
				case 37:
					reArrange('left');
					break;
				case 38:
					reArrange('up');
					break;
				case 39:
					reArrange('right');
					break;
				case 40:
					reArrange('down');
					break;
				default:
					return null;
			}
		}
	}

	componentDidMount(){
		let player = this.findPlayer();
		let state = this.state;
		state.player = player;
		this.setState(state);
	}

	render() {

		this.listenKeys();
		return (
			<div className="App">
				<Body 
					board={this.state.board}
				/>
			</div>
		);
	}
}

export default App;