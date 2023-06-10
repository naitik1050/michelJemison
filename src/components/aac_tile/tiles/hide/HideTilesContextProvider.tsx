import React, { FC, useState } from "react";

import HideTilesContext from "./HideTilesContext";
import useHideTiles from "./useHideTiles";

export const HideTilesContextProvider: FC<ProviderType> = ({ children }) => {
    const { handleHide, hiddenTiles, isHiddenTile, includesHiddenTile } = useHideTiles();

    return (
        <HideTilesContext.Provider value={{handleHide, hiddenTiles, isHiddenTile, includesHiddenTile}}>
            {children}
        </HideTilesContext.Provider>
    );
};
