import {Stack, Text, XStack} from "tamagui";
import Pronouns from "../../../assets/images/pronouns.svg";
import {responsiveFontSize} from "react-native-responsive-dimensions";
import React, {useEffect} from "react";
import {
    getFolderRepresentativeTilesByWordToDisplay,
    getFolderRepresentativeTiles
} from "../../../assets/images/categories-images";
import {useGridSizeAndPlaceStaticTiles} from "../../../hooks/useGridSizeAndPlaceStaticTiles";
import TileHelper from "../../../utils/TileHelper";
import {StaticTile, Tile} from "../../../@types/model_";
import {TileComposite} from "../tile/TileComposite";
import {useFolderContext} from "./FolderContext";
import {FolderMainCardI} from "../../FolderMainCard";
import {CategoryImageAssets} from "../../../assets/images/categories-images/CategoryImageAssets";
import {AssetRecordFactory} from "../../AssetRecordFactory";

interface FolderSubCardI extends Omit<FolderMainCardI, 'folder'> {
    title: string;
}

export const FolderSubCard = ({
                                  title,
                                  bg,
                                  color,
                                  Icon,
                                  folderTitle = "mainShort"
                              }: FolderSubCardI) => {
    const {grid} = useGridSizeAndPlaceStaticTiles(getFolderRepresentativeTiles(), folderTitle);
    const {handleFolder} = useFolderContext();
    return (
        <Stack padding={5} alignItems={"center"}>
            <XStack ai={"center"} w={"95%"} paddingVertical={8} br={10} bg={bg}>
                <XStack jc={"center"} w={"80%"} overflow="hidden">
                    {/*<Pronouns width={20} height={20}/>*/}
                    <AssetRecordFactory
                        assetRecord={CategoryImageAssets.mainTopic}
                        width={20} height={20}
                    />

                    <Text
                        fos={responsiveFontSize(1.05)}
                        fontFamily={"AvenirNextCyrDemi"}
                        color={color}
                        ml={15}
                    >
                        {title}
                    </Text>
                </XStack>
            </XStack>
            <Stack fd={"row"} flexWrap="wrap" jc={"space-evenly"} w={"100%"}>
                {grid.map((rowValues: StaticTile[], row: number) => (
                    <XStack
                        fd={"row"}
                        ai={"center"}
                        jc={"space-around"}
                        fw={"wrap"}
                        w={"100%"}
                        key={row}>
                        {rowValues.map((value, column) => {
                                // const assetRecord = assets.assets[value];
                                const coordinates = TileHelper.generateCoordinates(row, column);
                                const folder = getFolderRepresentativeTilesByWordToDisplay(value!.wordToDisplay)!;

                                return value.assetRecord ?
                                    (<TileComposite
                                        key={coordinates + folder.representativeTile.wordToDisplay}
                                        fn={() => handleFolder(folder)}
                                        tile={{
                                            assetRecord: value.assetRecord,
                                            wordToDisplay: value.wordToDisplay,
                                            wordToSpeak: value.wordToSpeak,
                                            bg,
                                            color,
                                            gridTitleEnum: folder.representativeTile.wordToDisplay,
                                            gridColumn: column,
                                            gridRow: row,
                                            coordinates
                                        }}
                                    />) : null
                            }
                        )}
                    </XStack>
                ))}
            </Stack>
        </Stack>
    );
};
