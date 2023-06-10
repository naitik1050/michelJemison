import {Button} from "tamagui";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {SettingsUnauthorizedProp} from "../../@types/navigation";
import {setToggleSetting, toggleSetting} from "../../redux/app/toggleSlice";
import {useAppDispatch} from "../../@types/redux_component.d";

export const NavigateToLoginButton = () => {
    const navigation = useNavigation<SettingsUnauthorizedProp>();
    const dispatch = useAppDispatch();
    return (
        <Button
            size="$3"
            backgroundColor={"$primaryColorTwo"}
            color={"white"}
            onPress={() => {
                dispatch(setToggleSetting(false));
                navigation.navigate("LoginScreen");
            }}
        >
            Log In
        </Button>
    )
}