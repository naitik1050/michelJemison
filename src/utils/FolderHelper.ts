import {Folder} from "../@types/image";

export const getFolderTileCount = (categorySelected:Folder) => {
    if (!categorySelected || !categorySelected.staticTiles || typeof categorySelected.staticTiles !== 'object') {
        return 0;
    }
    return Object.keys(categorySelected.staticTiles).length;
};

