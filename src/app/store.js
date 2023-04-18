import {configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from 'redux-thunk';

import channelReducer from '../features/remote/channelSlice';
import powerReducer from '../features/remote/powerSlice';
import volumeReducer from '../features/remote/volumeSlice';

const reducers = combineReducers({
    channel: channelReducer,
    turn: powerReducer,
    volume: volumeReducer
});

const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
});