import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import {searchRobots, requestRobots } from './reducers'
//import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons'
import App from './containers/App'


//const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunkMiddleware))); //added redux-devtools from chrome store.


ReactDOM.render(<Provider store = {store}>
                    <App />
                </Provider>
         , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
