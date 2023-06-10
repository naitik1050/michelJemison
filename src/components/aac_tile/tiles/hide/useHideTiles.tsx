import { useState } from "react";
import {Tile} from "../../../../@types/model_";

export default () => {

    const [hiddenTiles, setHiddenTiles] = useState<string[]>([]);
//add a hashmap to this check hidden:boolean
    //should work with state
    const isHiddenTile = (tileIndex: string) => {
        return (tile: string) => tile === tileIndex;
    };

    const handleHide = (surfaceTile:Tile) => {
        // const tileIndex = `${rowIndex}_${index}`;
        if (hiddenTiles.includes(surfaceTile.coordinates)) {
            setHiddenTiles(hiddenTiles.filter((tile) => !isHiddenTile(surfaceTile.coordinates)(tile)));
        } else {
            setHiddenTiles([...hiddenTiles, surfaceTile.coordinates]);
        }
    };
    const includesHiddenTile = (tileIndex: string) => {
        return hiddenTiles.some(isHiddenTile(tileIndex));
    };

    return { handleHide, hiddenTiles,isHiddenTile,includesHiddenTile};
};