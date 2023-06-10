import {createContext, useContext} from "react";
import {Tile} from "../../../../@types/model_";

interface HideTilesContextType {
    handleHide: (tile: Tile) => void;
    hiddenTiles: string[];
    isHiddenTile: (tileIndex: string) => (tile: string) => void;
    includesHiddenTile: (tileIndex: string) => boolean;
}

const HideTilesContext = createContext<HideTilesContextType | null>(null);

export default HideTilesContext;

export const useHideTilesContext = () => {
    const hideTileContext = useContext(HideTilesContext);
    if (hideTileContext === null) {
        throw new Error('useHideTileContext must be used within a HideTileContextProvider');
    }
    return hideTileContext;
};