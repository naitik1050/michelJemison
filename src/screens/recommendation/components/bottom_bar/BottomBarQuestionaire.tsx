import {Spinner, Stack, useWindowDimensions} from "tamagui";
import CustomButton from "../../../../components/Button";
import React from "react";
import {useNavigation} from "@react-navigation/native";

export const BottomBarQuestionaire = ({
                                          isLoading,
                                          onPress
                                      }: {
    isLoading: boolean,
    onPress: (data: any) => void;
}) => {
    const {height, width} = useWindowDimensions();
    const navigation = useNavigation<any>();
    return (
        <Stack
            alignItems={"center"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            width={"90%"}
            marginTop={height * .09}
        >
            <Stack width={width * .17} height={height * 0.075}>
                <CustomButton
                    title={"Cancel"}
                    // onPress={() => navigation.navigate("Recommendation")}
                    onPress={() => navigation.goBack()}
                    bg={true}
                />
            </Stack>
            <Stack width={width * .17} height={height * 0.075}>
                <CustomButton
                    title={"Save"}
                    Icon={isLoading ? () => <Spinner/> : undefined}
                    onPress={onPress}
                />
            </Stack>
        </Stack>
    );
}