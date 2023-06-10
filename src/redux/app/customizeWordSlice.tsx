import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../../@types/redux_type";
import {CustomWordDTO} from "../../@types/model_";

interface CustomWordState {
    customWord?: CustomWordDTO;
}

const initialState: CustomWordState = {};

const customWordSlice = createSlice({
    name: 'customWord',
    initialState,
    reducers: {
        addCustomWord: (state, action: PayloadAction<CustomWordDTO>) => {
            const customWord = action.payload;
            if (customWord.wordToSpeak === '') customWord.wordToSpeak = customWord.wordToDisplay;
            state.customWord = customWord;
        },
        clearCustomWord: (state) => {
            state.customWord = undefined;
        },
    },
});
export const selectCustomWord = (state: RootState) => state.customWord.customWord;
export const {addCustomWord, clearCustomWord} = customWordSlice.actions;

export default customWordSlice.reducer;
