import {responsiveFontSize, responsiveHeight} from "react-native-responsive-dimensions";
import {Image, Square, Text, YStack} from "tamagui";
import React, {useEffect} from "react";
import {CustomWordDTO, Tile} from "../../../../@types/model_";
import {InnerFolderTileEmpty} from "./InnerFolderTileEmpty";
import {TileImageFactory} from "../../tile/TileImageFactory";
import {useTilesContext} from "../../tiles";
import {StyledFolderTile} from "./styled/StyledFolderTile";
import {InnerFolderEditTile} from "./InnerFolderEditTile";

export const InnerFolderTileFactory = (
    {
        tile,
    }:
        {
            tile: Tile ,
        }
) => {
    const {invokeTile} = useTilesContext();
    return (
        !tile.isBlank ?
            <StyledFolderTile
                onPress={() => invokeTile(tile)}
                key={tile.coordinates + tile.gridTitleEnum}
            >
                <InnerFolderEditTile
                    tile={tile}
                />
                <YStack ai={"center"}>
                    <TileImageFactory
                        tile={tile}
                        width={25}
                        height={25}
                    />
                    <Text
                        numberOfLines={1}
                        ta={"center"}
                        fos={responsiveFontSize(0.9)}
                        fontFamily={"AvenirNextCyrRegular"}
                        color={"#5F5C5C"}
                        // marginRight={5}
                        mt={5}
                    >
                        {tile.wordToDisplay}
                    </Text>
                </YStack>
            </StyledFolderTile>
            :
            <InnerFolderTileEmpty
                tile={tile}
            />
    )
};