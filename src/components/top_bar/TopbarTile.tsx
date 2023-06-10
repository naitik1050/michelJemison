import {Text, XStack} from "tamagui";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import {TileImageFactory} from "../aac_tile/tile/TileImageFactory";
import React from "react";
import {Tile} from "../../@types/model_";

interface Props {
    tile:Tile;
    i:number;
}
export const TopbarTile = ({tile,i}:Props) => {
    return (
        <XStack
            key={i}
            jc="center"
            ai={"center"}
            w={responsiveWidth(10)}
            h={responsiveHeight(6)}
            br={10}
            bg={tile.bg}
            m={4}
            px={5}
            overflow="hidden"
        >
            <TileImageFactory
                tile={tile}
                height={25}
                width={25}
            />
            <Text
                numberOfLines={1}
                fos={responsiveFontSize(0.9)}
                fontFamily={"AvenirNextCyrDemi"}
                color={tile.color}
                ml={5}
            >
                {tile.wordToDisplay}
            </Text>

        </XStack>
    )
}