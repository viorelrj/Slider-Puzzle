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

	reArrange(dir) {
		let board = this.state.board;
		let player = this.state.player;

		if (!board[player.row + dir[0]]) {
			return null;
		}
		if (!board[player.row + dir[0]][player.block + dir[1]]) {
			return null;
		}

		if (dir[0] > 1 || dir[0] < -1){
			return null;
		}

		if (dir[1] > 1 || dir[1] < -1){
			return null;
		}

		if (dir[0] + dir[1] > 1 || dir[0] + dir[1] < -1 || dir[0] + dir[1] === 0){
			return null;
		}

		let backupBlock = board[player.row + dir[0]][player.block + dir[1]];
		board[player.row + dir[0]].splice(player.block + dir[1], 1, 0);
		board[player.row][player.block] = backupBlock;
		player = {
			row: player.row + dir[0],
			block: player.block + dir[1]
		}
		this.setState({
			board: board,
			player: player
		})
	}

	listenKeys(){
		let reArrange = this.reArrange.bind(this);
		document.onkeydown = function(evt) {
			switch(evt.keyCode){
				case 37:
					reArrange([0, -1]);
					break;
				case 38:
					reArrange([-1, 0]);
					break;
				case 39:
					reArrange([0, 1]);
					break;
				case 40:
					reArrange([1, 0]);
					break;
				default:
					return null;
			}
		}
	}

	listenClick(ev){
		let player = this.state.player
		this.reArrange([ev.row - player.row, ev.block - player.block]);
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
					listenClick={this.listenClick.bind(this)}
				/>
			</div>
		);
	}
}

export default App;