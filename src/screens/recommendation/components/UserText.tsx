import {Stack, Text} from "tamagui";
import {responsiveHeight} from "react-native-responsive-dimensions";
import {colors} from "../../../assets/colors";
import React from "react";
import {useLoggedInUserQuery} from "../../../redux/api/userApiSlice";

export const UserText = () => {
    const {data} = useLoggedInUserQuery();
    return (
        <Stack marginTop={responsiveHeight(5)} alignItems={"center"} width={"70%"}>
            <Text
                fontFamily={"AvenirNextCyrDemi"}
                fontSize={35}
                color={colors.black}
            >
                Tell us more about {data && data.firstname}
            </Text>
        </Stack>
    );
}