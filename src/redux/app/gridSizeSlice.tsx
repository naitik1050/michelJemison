import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {TabNavigatorParamEnum, TabNavigatorParams} from "../../@types/navigation";
import {RootState} from "../../@types/redux_type";

// Define a type for the GridSize object
type GridSize = {
    column: number;
    row: number;
};

// Define the initial state of the gridSize slice
const initialState: GridSize = {
    column: 4,
    row: 4
};

// Create a slice for the gridSize state
export const gridSizeSlice = createSlice({
    name: 'gridSize',
    initialState,
    reducers: {
        // Define a reducer function that takes an enum parameter and returns a GridSize object
        setGridSize: (state, action: PayloadAction<TabNavigatorParamEnum>) => {
            switch (action.payload) {
                case "All":
                    return {
                        ...state,
                        column:8,
                        row: 6
                    };
                case "SVG":
                    return {
                        ...state,
                        column:9,
                        row: 5
                    };
                case "Eat":
                    return {
                        ...state,
                        column: 7,
                        row: 7
                    };
                default:
                    return state;
            }
        }
    }
});

// Export the actions and reducer function
export const { setGridSize } = gridSizeSlice.actions;
export const gridSize = (state: RootState) => state.gridSize;
export const gridSizeReducer = gridSizeSlice.reducer;
