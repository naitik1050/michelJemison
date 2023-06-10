import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SpeakTimeoutState {
    isTimeout: boolean;
}

const initialState: SpeakTimeoutState = {
    isTimeout: false,
};

const speakTimeoutSlice = createSlice({
    name: 'speakTimeout',
    initialState,
    reducers: {
        setIsTimeout: (state, action: PayloadAction<boolean>) => {
            state.isTimeout = action.payload;
        },
    },
});

export const { setIsTimeout } = speakTimeoutSlice.actions;

export const selectIsTimeout = (state: { speakTimeout: SpeakTimeoutState }) =>
    state.speakTimeout.isTimeout;

export default speakTimeoutSlice.reducer;
