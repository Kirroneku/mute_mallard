import { DECK } from './types';
import { API_CONFIG } from '../config';

export const fetchDeckSuccess = (deckJson) => {
    const { remaining, deck_id } = deckJson;

    return { type: DECK.FETCH_SUCCESS, remaining, deck_id };
}

export const fetchDeckError = error => {
    return { type: DECK.FETCH_ERROR, message: error.message }
}

export const cleanDeck = () =>{
    return { type: DECK.RESET };
}

export const fetchNewDeck = () => (dispatch) => {
    fetch(`${API_CONFIG.DECK_API}/deck/new/shuffle`)
    .then(res => res.json())
    .then(json => dispatch(fetchDeckSuccess(json)))
    .catch(error => dispatch(fetchDeckError(error)));
}