import { DECK, CARD } from '../actions/types';

import fetchStates from './fetchStates';

const DEFAULT_DECK = {
    deck_id: '',
    remaining: 0,
    currentCard: null,
    fetchState: '',
    message: ''
}

const deckReducer = (state = DEFAULT_DECK, action) => {
    switch(action.type){
        case DECK.FETCH_SUCCESS:
            var { remaining, deck_id } = action;
            return { ...state, remaining, deck_id, fetchState: fetchStates.success}
        case DECK.FETCH_ERROR:
            return { ...state, message: action.message,  fetchState: fetchStates.error }
        case CARD.FETCH_SUCCESS:
            var { remaining, currentCard } = action;
            return { ...state, remaining, currentCard, fetchState: fetchStates.success}
        case CARD.FETCH_ERROR:
            return { ...state, message: action.message,  fetchState: fetchStates.error }
        case DECK.RESET:
            return { DEFAULT_DECK }
        default:
            return state;
    }
}

export default deckReducer;