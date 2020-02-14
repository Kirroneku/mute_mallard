import { combineReducers } from 'redux';
import settingsReducer from './settings';
import deckReducer from './deck';
import playerReducer from './playerProgress';

export default combineReducers({ 
    settings: settingsReducer,
    deck: deckReducer,
    player: playerReducer
})