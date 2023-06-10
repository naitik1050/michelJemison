import { Tile } from "../@types/model_";
import { useTilesContext } from "../components/aac_tile/tiles";
import TileHelper from "../utils/TileHelper";
import {Folder} from "../@types/image";
interface CreateTileProps {
    folder:Folder;
}
const useCreateTile = ({folder}:CreateTileProps) => {
    const { tilesCustom } = useTilesContext();

    const createTile = (value: any, row: number, column: number): Tile => {
        const coordinates = TileHelper.generateCoordinates(row, column);
        const gridTitleEnum = folder.representativeTile.key;
        const getMatchedTile = (coordinates: string, gridTitleEnum: string) =>
            tilesCustom.find(
                (tile) => tile.coordinates === coordinates && tile.gridTitleEnum === gridTitleEnum
            );

        const matchedTile = getMatchedTile(coordinates, gridTitleEnum);
        const finalTile = value
            ? {
                ...value,
                bg: folder.representativeTile.bg,
                color: folder.representativeTile.color,
                gridColumn: column,
                gridRow: row,
                gridTitleEnum,
                coordinates,
            }
            : {
                wordToDisplay: "",
                wordToSpeak: "",
                bg: folder.representativeTile.bg,
                color: folder.representativeTile.bg,
                gridColumn: column,
                gridRow: row,
                isBlank: true,
                gridTitleEnum,
                coordinates,
            };

        return matchedTile ? {...matchedTile, bg: folder.representativeTile.bg, color: folder.representativeTile.color} : finalTile;
    };

    return createTile;
};

export default useCreateTile;
