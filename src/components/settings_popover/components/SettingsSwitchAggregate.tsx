import {SettingsSwitchWithLabel} from "./SettingsSwitchWithLabel";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../../@types/redux_component.d";
import {setToggleAI, setToggleEdit, toggleDialogUnauthorized} from "../../../redux/app/toggleSlice";
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../../redux/api/authSlice";

export const SettingsSwitchAggregate = () => {
    const {
        isToggledAI,
        isToggledEdit
    } = useAppSelector(state => state.toggle);

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useAppDispatch();
    const dispatchToggleEdit = () => {dispatch(setToggleEdit(!isToggledEdit))};
    const dispatchToggleAI = () => {dispatch(setToggleAI(!isToggledAI))};
    const dispatchToggleDialogUnauthorized = () => {dispatch(toggleDialogUnauthorized())};

    return (
        <>
            <SettingsSwitchWithLabel label="Auto-Completion" toggleSwitch={isToggledAI}  setToggleSwitch={isLoggedIn ? dispatchToggleAI : dispatchToggleDialogUnauthorized} size="$2"/>
            <SettingsSwitchWithLabel label="Edit Words" toggleSwitch={isToggledEdit}  setToggleSwitch={isLoggedIn ? dispatchToggleEdit : dispatchToggleDialogUnauthorized} size="$2"/>
        </>
    )
}