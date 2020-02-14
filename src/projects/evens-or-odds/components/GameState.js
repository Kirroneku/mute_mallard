import React from 'react';
import { connect } from 'react-redux';

const correctGuessesRecordKey = 'CORRECT_GUESSES_RECORD_pp6969'

const checkRecord = correctGuesses => {
    const record = Number(localStorage.getItem(correctGuessesRecordKey));

    if( correctGuesses > record) {
        localStorage.setItem(correctGuessesRecordKey, correctGuesses);

        return { record: correctGuesses, isNewRecord: true};
    }

    return { record, isNewRecord: false};
}

const Card = props => {
    const {correct, combo, remaining} = props;

    const { record, isNewRecord } = checkRecord(correct);

    const recordLabel = isNewRecord ? 'New record!' : 'Record';
    
    return (
        <div>
            <h3> {recordLabel}: {record} </h3>
            <h3>{remaining} cards remaining</h3>
            <p>
                Score: {correct}
            </p>
            <h4>{combo} COMBO!</h4>
        </div>
    );
}

const mapStateToProps = state => {
    const {
        deck: { remaining },
        player: { correct, combo }
    } = state;

    return {
        remaining,
        correct,
        combo
    };
}

const componentConnector = connect(
    mapStateToProps
);

export default componentConnector(Card);
