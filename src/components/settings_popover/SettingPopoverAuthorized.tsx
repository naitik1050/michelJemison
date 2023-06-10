import React, {useState} from "react";
import {
    Adapt,
    Button,
    Input,
    Label,
    Popover,
    PopoverProps, SelectIcon,
    XStack,
    YGroup,
    YStack,
    Switch, Text, SizeTokens, Separator
} from 'tamagui'
import {useAppDispatch, useAppSelector} from "../../@types/redux_component.d";
import SettingInactive from "../../assets/images/setting-inactive.svg";
import {responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import SettingActive from "../../assets/images/setting-active.svg";
import {setToggleAI, setToggleEdit, toggleSetting} from "../../redux/app/toggleSlice";
import {useNavigation} from "@react-navigation/native";
import useLogout from "../../hooks/useLogout";
import {SettingsAuthorizedProp} from "../../@types/navigation";
import {SettingsLogoutButton} from "./components/SettingsLogoutButton";
import {SettingsDeleteButton} from "./components/SettingsDeleteButton";

export const SettingPopoverAuthorized = () => {

    return (
        <>
            <SettingsLogoutButton/>
            <SettingsDeleteButton/>
        </>
    );

}

