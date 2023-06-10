import React, { FC } from "react";
import EditTilesContext  from "./EditTilesContext";
import {useEditTile} from "./useEditTile";
import {CustomWordDTO, Tile} from "../../../../@types/model_";


export const EditTilesContextProvider: FC<ProviderType> = ({ children }) => {
    const {editTile:editeTile_v1} = useEditTile();
    const editTile = (tile: Tile) => {
        const customWordDTO: CustomWordDTO = {
            wordToDisplay: tile.wordToDisplay,
            gridColumn: tile.gridColumn,
            gridRow: tile.gridRow,
            wordToSpeak: tile.wordToSpeak,
            gridTitleEnum: tile.gridTitleEnum
        };
        editeTile_v1(customWordDTO);
    };
    return (
        <EditTilesContext.Provider value={{editTile}}>
            {children}
        </EditTilesContext.Provider>
    );
};

