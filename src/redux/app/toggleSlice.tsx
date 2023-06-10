import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../@types/redux_type";

interface ToggleState {
    isToggledHide: boolean;
    isToggledEdit: boolean;
    isToggledSetting: boolean;
    isToggledAI: boolean;
    isToggledDialogUnauthorized: boolean;
}

const initialState: ToggleState = {
    isToggledHide: false,
    isToggledEdit: false,
    isToggledSetting:false,
    isToggledAI:false,
    isToggledDialogUnauthorized: false,
};

const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggleOnHide: (state) => {
            state.isToggledHide = true;
            if (state.isToggledEdit) {
                state.isToggledEdit = false;
            }
        },
        toggleOffHide: (state) => {
            state.isToggledHide = false;
        },
        toggleHide: (state) => {
            state.isToggledHide = !state.isToggledHide;
            if (state.isToggledHide && state.isToggledEdit) {
                state.isToggledEdit = false;
            }
        },
        setToggleHide: (state, action: PayloadAction<boolean>) => {
            state.isToggledHide = action.payload;
        },
        toggleOnEdit: (state) => {
            state.isToggledEdit = true;
            if (state.isToggledHide) {
                state.isToggledHide = false;
            }
        },
        toggleOffEdit: (state) => {
            state.isToggledEdit = false;
        },
        toggleEdit: (state) => {
            state.isToggledEdit = !state.isToggledEdit;
            if (state.isToggledEdit && state.isToggledHide) {
                state.isToggledHide = false;
            }
        },
        setToggleEdit: (state, action: PayloadAction<boolean>) => {
            state.isToggledEdit = action.payload;
        },
        toggleSetting: (state) => {
          state.isToggledSetting = !state.isToggledSetting;
        },
        setToggleSetting: (state, action: PayloadAction<boolean>) => {
            state.isToggledSetting = action.payload;
        },
        setToggleAI: (state, action: PayloadAction<boolean>) => {
            state.isToggledAI = action.payload;
        },
        toggleDialogUnauthorized: (state) => {
            state.isToggledDialogUnauthorized = !state.isToggledDialogUnauthorized;
            state.isToggledSetting = false;
        },
    },
});

export const {
    toggleOnHide,
    toggleOffHide,
    toggleHide,
    setToggleHide,
    toggleOnEdit,
    toggleOffEdit,
    toggleEdit,
    setToggleEdit,
    toggleSetting,
    setToggleAI,
    toggleDialogUnauthorized,
    setToggleSetting
} = toggleSlice.actions;
export const selectIsToggledEdit = (state: RootState) => state.toggle.isToggledEdit;
export const selectIsToggledAI = (state: RootState) => state.toggle.isToggledAI;
export default toggleSlice.reducer;
