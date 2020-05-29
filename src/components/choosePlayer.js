import React, { Component } from 'react';

class Player extends Component {

    handleForm(e) {
        e.preventDefault();
        this.props.player(e.target.player.value)
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleForm(e)} className="choosePlayer">
                <label className="obj">
                    Player X
                <input type="radio" name="player" value="X" />
                </label>
                <label className="obj">
                    Player O
                    <input type="radio" name="player" value="O" />
                </label>
                <input type="submit" value="Start" className="subm"/>
            </form>
        )
    }
}

export default Player;