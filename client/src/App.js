import React from 'react';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Routes from './Routes';
import reducers from './reducers';

import './App.css';

/**
DRADENS ADDED CODE
**/
const mongoose = require('mongoose');
//const config = require('../config/database');
//mongoose.connect(config.database);
//const db = mongoose.connection;
//END OF DRADENS CODE

/* @TODO: make this applicable to us */
const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: [
        'loggedIn',
        'appStatus',
    ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

let middleware = [thunk];

if ('production' !== process.env.NODE_ENV) {
    // const logger = createLogger({});
    // middleware.push(logger);
}

const store = createStore(persistedReducer, applyMiddleware(...middleware));
// const store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Routes />
            </PersistGate>
        </Provider>
    );
}

export default App;
