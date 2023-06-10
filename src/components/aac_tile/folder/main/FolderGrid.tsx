import {useFolderContext} from "../FolderContext";
import {XStack} from "tamagui";
import React from "react";
import {InnerFolderTileFactory} from "../inner/InnerFolderTileFactory";
import {useGridSizeAndPlaceStaticTiles} from "../../../../hooks/useGridSizeAndPlaceStaticTiles";
import {StaticTile} from "../../../../@types/model_";
import uuid from "react-native-uuid";
import useCreateTile from "../../../../hooks/useCreateTile";

export const FolderGrid = () => {
    const {folderSelected} = useFolderContext();
    const {grid} = useGridSizeAndPlaceStaticTiles(folderSelected.staticTiles, "categories");
    const createTile = useCreateTile({folder:folderSelected});
    return <>
        {
            grid.map((rowValues: StaticTile[], row: number) => (
                <XStack
                    fd={"row"}
                    ai={"center"}
                    jc={"center"}
                    fw={"wrap"}
                    key={row}>
                    {rowValues.map((value, column) => {
                        return <InnerFolderTileFactory
                            key={`${uuid.v4()}`}
                            tile={createTile(value, row, column)}
                        />
                    })}
                </XStack>
            ))
        }
    </>;

}
