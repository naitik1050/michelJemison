import React, {FC, useEffect, useState} from 'react';

import {EditTilesContextProvider} from "./edit";
import {HideTilesContextProvider} from "./hide";
import {TilesContext} from './TilesContext';
import useTilesCustom from "../../../hooks/tile/useTilesCustom";
import {Tile} from "../../../@types/model_";
import useSpeak from "../../../hooks/speak/useSpeak";


export const TilesProvider: FC<ProviderType> = ({children}) => {

    const {tilesCustom} = useTilesCustom();
    const [tiles, setTiles] = useState<Tile[]>([]);
    const {handleSpeak} = useSpeak();
    const setTilesHandle = (data: Tile) => {
        setTiles([...tiles, data]);
    };
    const invokeTile = (tile: Tile) => {
        setTilesHandle(tile);
        handleSpeak(tile.wordToSpeak);
    };

    return (
        <TilesContext.Provider value={{
            tilesCustom,
            tiles,
            setTiles,
            setTilesHandle,
            invokeTile: invokeTile
        }}>
            <HideTilesContextProvider>
                <EditTilesContextProvider>
                    {children}
                </EditTilesContextProvider>
            </HideTilesContextProvider>
        </TilesContext.Provider>
    );
};










