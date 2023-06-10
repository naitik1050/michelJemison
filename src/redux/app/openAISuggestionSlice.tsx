// openAISuggestionSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "../../@types/redux_type";

interface OpenAISuggestionState {
    suggestions: OpenAI_SuggestionsResponse[] | null;
}

const initialState: OpenAISuggestionState = {
    suggestions: null,
};

const openAISuggestionSlice = createSlice({
    name: "openAI_Suggestions",
    initialState,
    reducers: {
        setSuggestions: (state, action: PayloadAction<OpenAI_SuggestionsResponse[] | null>) => {
            state.suggestions = action.payload;
        },
    },
});

export const { setSuggestions } = openAISuggestionSlice.actions;
export default openAISuggestionSlice.reducer;

// Add the selector function here
export const selectSuggestions = (state: RootState) => state.openAI_Suggestions.suggestions;
