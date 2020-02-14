import React from 'react';
import { connect } from 'react-redux';
import { playerCorrect, playerWrong } from '../actions/player';

import cardBack from '../assets/cardBack.png';

const Card = props => {
    console.log(props)

    const {currentCard, guess} = props;
    var curcard;

    if(currentCard == null){
        curcard = (
            <div>
                <h3>Start guessing to start the game!</h3>
                <img src={cardBack} alt="card image" style={{height:'400px'}}/>
            </div>
        )
    } else {
        if ((guess == "even" && 
            (currentCard.value % 2 == 0 || 
                currentCard.value == "KING" || 
                currentCard.value == "QUEEN" || 
                currentCard.value == "JACK" )) || (guess == "odd" && currentCard.value % 2 == 1))
        {
            props.playerCorrect();
        } else {
            props.playerWrong();
        }
        curcard = (
            <div>
                <h3>{currentCard.value} of {currentCard.suit}</h3>
                <img src={currentCard.images.png} alt="card image" style={{height:'400px'}}/>
            </div>
        )
    }

    return (
        <div>
            {curcard}
            <hr></hr>
        </div>
    );
}

const mapStateToProps = state => {
    const {
        deck : { currentCard },
        player: { guess }
    } = state;

    return {
        currentCard,
        guess
    };
}

const componentConnector = connect(
    mapStateToProps,
    {
        playerCorrect,
        playerWrong
    }
);

export default componentConnector(Card);