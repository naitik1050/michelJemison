import {Tile} from "../../../@types/model_";
import React, {createContext, useContext} from "react";

interface TilesContextType {
    tilesCustom: Tile[];
    tiles: Tile[];
    setTiles: React.Dispatch<React.SetStateAction<Tile[]>>;
    setTilesHandle(tile: Tile): void;
    invokeTile(tile: Tile): void;
}

export const TilesContext = createContext<TilesContextType>({} as TilesContextType);

export const useTilesContext = () => {
    const tileContext = useContext(TilesContext);
    if (tileContext === null) {
        throw new Error('useTileContext must be used within a TileContextProvider');
    }
    return tileContext;
};
