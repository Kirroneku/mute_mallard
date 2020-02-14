import { 
    PLAYER_GUESS_CORRECT,
    PLAYER_GUESS_WRONG,
    SET_PLAYER_GUESS
} from './types';

export const playerCorrect = () => dispatch => {
    dispatch({ type: PLAYER_GUESS_CORRECT })
}

export const playerWrong = () => dispatch => {
    dispatch({ type: PLAYER_GUESS_WRONG })
}

export const setPlayerGuess = guess => dispatch => {
    dispatch({ type: SET_PLAYER_GUESS, guess});
}