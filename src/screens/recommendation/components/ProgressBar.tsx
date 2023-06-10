import {Square, XStack} from "tamagui";
import {colors, height} from "../../../assets/colors";
import React from "react";

export const ProgressBar = ({nextRecommend}:{nextRecommend:number}) => {
    return (
        <XStack space={7} backgroundColor={"transparent"} marginTop={height / 15}>
            <Square
                width={50}
                height={5}
                borderRadius={40}
                backgroundColor={"$primaryColor"}
            />
            <Square
                width={50}
                height={5}
                borderRadius={40}
                backgroundColor={"$primaryColor"}
            />
            <Square
                width={50}
                height={5}
                borderRadius={40}
                backgroundColor={nextRecommend === 2 ? "$primaryColor" : "$fadeBar"}
            />
        </XStack>
    )
}