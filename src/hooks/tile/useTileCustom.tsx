import {GridTitleEnum, Tile} from "../../@types/model_";
import {useTilesContext} from "../../components/aac_tile/tiles";

export default (
    coordinates:string,
    screenName:GridTitleEnum)
    :Tile | undefined => {

    const { tilesCustom } = useTilesContext();
    return tilesCustom.find(tileCustom =>
        tileCustom.coordinates === coordinates
        && tileCustom.gridTitleEnum == screenName
    );
}