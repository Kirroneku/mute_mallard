import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

// store.dispatch(startGame());
// store.dispatch(expandInstruction());

// store.dispatch(cancelGame());
// store.dispatch(collapseInstruction());

const EvensOrOdds = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}

export default EvensOrOdds;