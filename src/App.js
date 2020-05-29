import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Player from './components/choosePlayer';
import Status from './components/Status';



class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null
    }
  }


  render(){

    const Box = this.state.board.map((box, index) => <div className="box" key={index} onClick={() => 
      this.handleClick(index)}>{box}</div> )

    return (
      <div className="App">
        <header className="App-header">
            <h1>Tic Tac Toe Game!!!</h1>
            
            <div className="container">
                <h1>Tic Tac Toe App</h1>
                <Status
                player={this.state.player}
                setPlayer={(e) => { this.setPlayer(e) }}
                winner={this.state.winner}
            />
            <div className="board">
                {this.renderBoxes()}
            </div>
            </div>
            <button className="btn-cancel" disabled={!this.state.winner} onClick={() => this.reset()}> Reset</button >

        </header>
      </div>
    );
  } 

  handleClick(index) {
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board
      if (this.state.board[index] === null) {
        newBoard[index] = this.state.player
        this.setState({
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X"
        })
        this.checkWinner()
      }
    }
  }

  checkWinner(){
    let winLines = 
    [
      ["0", "1", "2"],
      ["3", "4", "5"],
      ["6", "7", "8"],
      ["0", "3", "6"],
      ["2", "5", "8"],
      ["1", "4", "7"],
      ["0", "4", "8"],
      ["2", "4", "6"]
    ]

    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index]    
      
      if(this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]){
        alert(this.state.player + ' Won The Game!')
        this.setState({
            winner: this.state.player

        })
      }
    }
  }

  setPlayer(player) {
    this.setState({ player })
  }

  
  checkMatch(winLines) {
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      let board = this.state.board
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert('You won');
        this.setState({
          winner: this.state.player
        })
      }
    }
  }

  renderBoxes() {
    return this.state.board.map(
      (box, index) =>
        <div className="box" key={index}
          onClick={() => this.handleClick(index)}>
          {box} </div>
    )
  }
  reset() {
    this.setState({
      player: null,
      winner: null,
      board: Array(9).fill(null)
    })
  }
}



export default App;
