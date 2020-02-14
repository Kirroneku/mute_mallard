import { CARD } from './types';
import { API_CONFIG } from '../config';

export const fetchCardSuccess = (cardJson) => {
    console.log(cardJson)
    const { remaining, cards } = cardJson;

    const currentCard = cards[0];
    console.log(currentCard)

    return { type: CARD.FETCH_SUCCESS, remaining, currentCard };
}

export const fetchCardError = error => {
    return { type: CARD.FETCH_ERROR, message: error.message }
}

export const fetchNewCard = (deck_id, guess) => dispatch => {
    console.log(deck_id)
    fetch(`${API_CONFIG.DECK_API}/deck/${deck_id}/draw`)
    .then(res => res.json())
    .then(json => dispatch(fetchCardSuccess(json)))
    .catch(error => dispatch(fetchCardError(error)));
}