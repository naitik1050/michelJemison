import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import logger from 'redux-logger'
import {apiSlice} from "./apiSlice";
import authSlice from "./api/authSlice";
import sentenceSliceReducer from './app/sentenceSlice';
import {gridSizeReducer} from "./app/gridSizeSlice";
import toggleSliceReducer from "./app/toggleSlice";
import timeOutSliceReducer from "./app/timeOutSlice";
import customWordReducer from "./app/customizeWordSlice";
import openAISuggestionSliceReducer from "./app/openAISuggestionSlice";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        openAI_Suggestions: openAISuggestionSliceReducer,
        speakTimeout: timeOutSliceReducer,
        sentence: sentenceSliceReducer,
        toggle: toggleSliceReducer,
        customWord: customWordReducer,
        gridSize:gridSizeReducer,
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware,logger),
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(apiSlice.middleware),

    devTools: true
});

setupListeners(store.dispatch);