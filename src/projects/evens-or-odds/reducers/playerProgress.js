import { 
    PLAYER_GUESS_CORRECT,
    PLAYER_GUESS_WRONG,
    SET_PLAYER_GUESS
} from '../actions/types';

const DEFAULT_STATS = {
    correct: 0,
    combo: 0,
    guess: ''
}

const playerReducer = (state = DEFAULT_STATS, action) => {
    switch(action.type){
        case PLAYER_GUESS_CORRECT:
            var { correct, combo } = state;
            combo++;
            correct += combo;
            return { ...state, correct, combo}
        case PLAYER_GUESS_WRONG:
            return { ...state, combo: 0 }
        case SET_PLAYER_GUESS:
            const { guess } = action;
            return { ...state, guess}
        default:
            return state;
    }
}

export default playerReducer;