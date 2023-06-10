import {Button, Popover} from "tamagui";
import {toggleSetting} from "../../../redux/app/toggleSlice";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {SettingsAuthorizedProp} from "../../../@types/navigation";
import {useAppDispatch} from "../../../@types/redux_component.d";

export const SettingsDeleteButton = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<SettingsAuthorizedProp>();
    return (
        <Popover.Close
            asChild
        >
            <Button
                size="$3"
                backgroundColor={"$red"}
                color={"white"}
                onPress={() => {
                    dispatch(toggleSetting())
                    navigation.navigate("Delete")
                }}
            >
                Delete Account
            </Button>
        </Popover.Close>
    )
}