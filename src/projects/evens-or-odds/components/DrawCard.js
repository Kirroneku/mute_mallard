import React from 'react';
import { connect } from 'react-redux';
import { fetchNewCard } from '../actions/card';
import { setPlayerGuess } from '../actions/player';

const DrawCard = props => {
    // constructor(props){
    //     super(props)
    //     console.log('DrawCard props', this.props);

    // }
    var drawCard = null;

    if(props.deck_id == '') {
        drawCard = (
            <h5> Fetching Deck </h5>
        );
    } else {
        drawCard = (
            <div>
                <button style ={{marginRight: 10}} onClick={() => {
                    props.fetchNewCard(props.deck_id);
                    props.setPlayerGuess('even');
                }}> Even </button>
                <button onClick={() => {
                    props.fetchNewCard(props.deck_id);
                    props.setPlayerGuess('odd');
                }}> Odd </button>
            </div>
        )
    }

    return (
        <div>{drawCard}</div>
    );
    

}

const mapStateToProps = state => {
    const {
        deck: {deck_id, fetchState, message}
    } = state;

    return {
        deck_id,
        fetchState,
        message
    };
}

const componentConnector = connect(
    mapStateToProps,
    {
        fetchNewCard,
        setPlayerGuess
    }
);

export default componentConnector(DrawCard);