import {useTileContext} from "./TileContext";
import {StyledTile, StyledTileText} from "./styled";
import {Image, XStack} from "tamagui";
import React from "react";
import {useTilesContext} from "../tiles";
import {TileImageFactory} from "./TileImageFactory";
import CategoryArrow from "../../../assets/images/category-arrow.svg";

export const TileDisplay = () => {
    const { tile, fn } = useTileContext();
    const { invokeTile } = useTilesContext();

    const invokeMethod = fn ? fn : () => invokeTile(tile);

    return (
        <StyledTile
            bg={tile.bg}
            key={tile.coordinates}
            onPress={invokeMethod}
            // margin={1}
        >
            <TileImageFactory tile={tile} width={25} height={25} />
            <XStack ai={"center"} mt={3}>
                <StyledTileText color={tile.color}>
                    {tile.wordToDisplay}
                </StyledTileText>
                {fn && <CategoryArrow width={10} height={10}/>}
            </XStack>
        </StyledTile>
    );
};
