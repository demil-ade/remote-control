import {configureStore} from "@reduxjs/toolkit";
import channelReducer from '../features/remote/channelSlice';
import powerReducer from '../features/remote/powerSlice';
import volumeReducer from '../features/remote/volumeSlice';

export const store = configureStore({
    reducer: {
        channel: channelReducer,
        turn: powerReducer,
        volume: volumeReducer
    }
})