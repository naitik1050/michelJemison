import {Button, Popover} from "tamagui";
import React from "react";
import {NavigateToLoginButton} from "../../navigate/NavigateToLoginButton";

export const SettingsLoginButton = () => {
    return (
        <Popover.Close
            asChild
        >
            <NavigateToLoginButton/>
        </Popover.Close>
    );
}