import {createContext, useContext} from "react";
import {CustomWordDTO, Tile} from "../../../../@types/model_";

interface EditTilesContextType {
    editTile(tile: Tile): void
}

const EditTilesContext = createContext<EditTilesContextType | null>(null);

export default EditTilesContext;

export const useEditTilesContext = () => {
    const editTileContext = useContext(EditTilesContext);
    if (editTileContext === null) {
        throw new Error('useEditTileContext must be used within a EditTileContextProvider');
    }
    return editTileContext;
};