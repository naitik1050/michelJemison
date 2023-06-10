import {useGridSizeAndPlaceStaticTiles} from "../../../../hooks/useGridSizeAndPlaceStaticTiles";
import {Stack, XStack} from "tamagui";
import {StaticTile} from "../../../../@types/model_";
import {TileComposite} from "../../tile/TileComposite";
import React from "react";
import {Folder} from "../../../../@types/image";
import useCreateTile from "../../../../hooks/useCreateTile";

export interface FolderDetailCardI {
    folder: Folder;
    folderTitle?: string;
}

export const FolderDetailCard = ({
                                     folder,
                                     folderTitle = "mainShort"
                                 }: FolderDetailCardI) => {
    const {grid} = useGridSizeAndPlaceStaticTiles(folder.staticTiles, folderTitle);
    const createTile = useCreateTile({folder});
    return (
        <Stack
            padding={5}
            alignItems={"center"}
        >
            <Stack fd={"row"} flexWrap="wrap" jc={"space-evenly"} w={"100%"}>
                {grid.map((rowValues: StaticTile[], row: number) => (
                    <XStack
                        fd={"row"}
                        ai={"center"}
                        jc={"space-around"}
                        fw={"wrap"}
                        w={"100%"}
                        key={row}>
                        {rowValues.map(
                            (value, column) => <TileComposite
                                tile={createTile(value, row, column)}
                            />
                        )}
                    </XStack>
                ))}
            </Stack>
        </Stack>
    );
};
