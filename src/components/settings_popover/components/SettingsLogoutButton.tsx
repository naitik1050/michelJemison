import {Button, Popover} from "tamagui";
import {toggleSetting} from "../../../redux/app/toggleSlice";
import React from "react";
import useLogout from "../../../hooks/useLogout";
import {useAppDispatch} from "../../../@types/redux_component.d";

export const SettingsLogoutButton = () => {
    const { handleLogout } = useLogout();
    const dispatch = useAppDispatch();
    return (
        <Popover.Close
            asChild
        >
            <Button
                size="$3"
                backgroundColor={"$primaryColorTwo"}
                color={"white"}
                onPress={() => {
                    dispatch(toggleSetting())
                    handleLogout();
                }}
            >
                Log Out
            </Button>
        </Popover.Close>
    );
}