import {Text} from "tamagui";
import {responsiveFontSize} from "react-native-responsive-dimensions";
import React from "react";
import {useTileContext} from "./TileContext";

export const TileText = () => {
    const {tile} = useTileContext();
    <Text
        numberOfLines={1}
        fos={responsiveFontSize(0.9)}
        fontFamily={"AvenirNextCyrDemi"}
        color={tile.color}
        ml={5}
    >
        {tile.wordToDisplay}
    </Text>
}