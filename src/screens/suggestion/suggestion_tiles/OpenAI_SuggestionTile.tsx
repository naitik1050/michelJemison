import { Text, ToggleGroup } from "tamagui";
import React from "react";

export const OpenAI_SuggestionTile = ({ res, isActive }: { res: string; isActive: boolean }) => {
    const borderColor = isActive ? "purple" : "#f0f0f0";

    return (
        //so you can switch between which style you want based on conditions that is interesting with force style it apepars

        <ToggleGroup.Item
            size={60}
            value={res}
            margin={3}
            // forceStyle={isActive ? "press" : "focus"}
            forceStyle={"press"}
            pressStyle={{
                borderColor:borderColor,
                borderRadius:8
            }}
            // focusStyle={{
            //     backgroundColor:"red",
            //     borderRadius:8
            // }}

        >
            <Text color={"#474847"} fontSize={14} fontFamily={"AvenirNextCyrRegular"}>
                {res}
            </Text>
        </ToggleGroup.Item>
    );
};
