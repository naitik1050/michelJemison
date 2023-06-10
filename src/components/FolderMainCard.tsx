import React from "react";
import {Image, Stack, Text, XStack, YStack, getFontSize} from "tamagui";
import {responsiveFontSize} from "react-native-responsive-dimensions";
import {TileComposite} from "./aac_tile/tile/TileComposite";
import { Folder} from "../@types/image";
import {useGridSizeAndPlaceStaticTiles} from "../hooks/useGridSizeAndPlaceStaticTiles";
import {AssetRecordFactory} from "./AssetRecordFactory";
import {StaticTile} from "../@types/model_";
import {useFolderContext} from "./aac_tile/folder/FolderContext";
import useCreateTile from "../hooks/useCreateTile";

export interface FolderMainCardI {
    folder: Folder;
    bg: string;
    color: string;
    Icon?: React.ElementType | null;
    folderTitle?: string;
}

const FolderMainCard = ({
                            folder,
                            bg,
                            color,
                            Icon = null,
                            folderTitle = "mainShort"
                        }: FolderMainCardI) => {
    const {grid} = useGridSizeAndPlaceStaticTiles(folder.staticTiles, folderTitle);
    const {handleFolderDetail} = useFolderContext();
    const createTile = useCreateTile({folder});

    return (
        <Stack
            padding={5}
            alignItems={"center"}
        >
            <XStack
                ai={"center"}
                w={"95%"}
                paddingVertical={8}
                br={10}
                bg={bg}
            >
                <XStack jc={"center"} w={"80%"} overflow="hidden">
                    <AssetRecordFactory
                        assetRecord={folder.representativeTile.assetRecord}
                        width={25}
                        height={25}
                    />
                    <Text
                        fos={responsiveFontSize(1.05)}
                        fontFamily={"AvenirNextCyrDemi"}
                        color={color}
                        ml={15}
                    >
                        {folder.representativeTile.wordToDisplay}
                    </Text>
                </XStack>
                <Stack
                    onPress={() => handleFolderDetail(folder)}
                    w={"20%"}>
                    {Icon && <Icon width={20} height={20}/>}
                </Stack>
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
                        {rowValues.map((value, column) =>
                            <TileComposite
                                tile={createTile(value, row, column)}
                            />)}
                    </XStack>
                ))}
            </Stack>
        </Stack>
    );
};

export default FolderMainCard;
