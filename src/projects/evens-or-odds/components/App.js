import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck, cleanDeck } from '../actions/deck';
import Instructions from './instructions';
import fetchStates from '../reducers/fetchStates';
import DrawCard from './DrawCard';
import Card from './Card';
import GameState from './GameState';

class App extends Component {
    startGame = () => {
        this.props.startGame();
        this.props.fetchNewDeck();
    }

    cancelGame = () => {
        this.props.cancelGame();
        this.props.cleanDeck();
    }

    render() {
        console.log('this', this)

        if (this.props.fetchState === fetchStates.error) {
            return(
                <div>
                    <p>Please try reloading the app. An error occured.</p>
                    <p>{this.props.message}</p>
                </div>
            )
        }

        return (
            <div>
                <h2>♣ ♦ Evens or Odds ♥ ♠</h2>
                {
                    this.props.gameStarted ? (
                        <div>
                            <h3> Game Started!</h3>
                            <DrawCard />
                            <hr></hr>
                            <Card />
                            <br/>
                            <GameState />
                            <button onClick={this.cancelGame}>End Game</button>
                        </div>
                    ) : (
                        <div>
                            <h3>Start a new game!</h3>
                            <br/>
                            <button onClick={this.startGame}>Start Game</button>
                            <hr />
                            <Instructions />
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {
        settings : { gameStarted },
        deck : { fetchState, message },
        player: { correct, combo}
    } = state;

    return {
        gameStarted, fetchState, message, correct, combo
    };
}

// const mapDispatchToProps = dispatch => {
//     return {
//         startGame: () => dispatch(startGame()),
//         cancelGame: () => dispatch(cancelGame()),
//         fetchNewDeck: () => fetchNewDeck(dispatch)
//     };
// }

const componentConnector = connect(
    mapStateToProps,
    {
        startGame, cancelGame, fetchNewDeck, cleanDeck
    }
);

export default componentConnector(App);