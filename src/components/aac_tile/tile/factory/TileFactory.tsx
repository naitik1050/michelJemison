import {Tile} from "../../../../@types/model_";
import {useTilesContext} from "../../tiles";
import {InnerFolderEditTile} from "../../folder/inner/InnerFolderEditTile";
import {YStack, Text, XStack} from "tamagui";
import {TileImageFactory} from "../TileImageFactory";
import {StyledTile, StyledTileText} from "../styled";
import React from "react";
import {useTileContext} from "../TileContext";
import {AssetRecordFactory} from "../../../AssetRecordFactory";
import {ImageAssets} from "../../../../assets/images/ImageAssets";
import {InnerTileEmpty} from "../InnerTileEmpty";


export const TileFactory = (
    {
        tile,
    }:
        {
            tile: Tile,
        }
) => {
    const {invokeTile} = useTilesContext();
    const { fn } = useTileContext();
    const invokeMethod = fn ? fn : () => invokeTile(tile);
    return (
        !tile.isBlank ?
            <StyledTile
                bg={tile.bg}
                key={tile.coordinates}
                onPress={invokeMethod}
                // margin={1}
            >
                <InnerFolderEditTile
                    tile={tile}
                />
                <TileImageFactory tile={tile} width={25} height={25} />
                <XStack ai={"center"} mt={3}>
                    <StyledTileText color={tile.color}>
                        {tile.wordToDisplay}
                    </StyledTileText>
                    {fn && <AssetRecordFactory assetRecord={ImageAssets.categoryArrow} width={10} height={10}/>}
                </XStack>
            </StyledTile>
            :
            <InnerTileEmpty
                tile={tile}
            />
    )
};