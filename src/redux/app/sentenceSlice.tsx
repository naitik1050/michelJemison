import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../@types/redux_type';

interface SentenceState {
    words: WordWithTimestamp[];
}

const initialState: SentenceState = {
    words: [],
};

const sentenceSlice = createSlice({
    name: 'sentence',
    initialState,
    reducers: {
        updateSentence(state, action: PayloadAction<WordWithTimestamp>) {
            state.words.push({ display: action.payload.display, speak:action.payload.speak, timestamp: action.payload.timestamp });
        },
        deleteSentence(state) {
            state.words = [];
        },
        deleteLastWord(state) {
            state.words.pop();
        },
    },
});

export const { updateSentence, deleteSentence, deleteLastWord } = sentenceSlice.actions;
export const selectSentenceDisplay = (state: RootState) => state.sentence.words.map(word => word.display).join(" ");
export const selectSentenceSpeak = (state: RootState) => state.sentence.words.map(word => word.speak).join(" ");
export const selectWords = (state: RootState) => state.sentence.words;
export default sentenceSlice.reducer;
