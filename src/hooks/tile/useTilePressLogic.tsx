import {GridTitleEnum, Tile} from "../../@types/model_";
import {useAppSelector} from "../../@types/redux_component.d";
import {useRoute} from "@react-navigation/native";
import {useHideTilesContext} from "../../components/aac_tile/tiles/hide";
import {useEditTilesContext} from "../../components/aac_tile/tiles/edit";
import TileMapper from "../../utils/TileMapper";
import useSpeak_UpdateSentence from "../speak/useSpeak_UpdateSentence";


export default (tile:Tile) => {
    const toggleHideEnabled = useAppSelector((state) => state.toggle.isToggledHide);
    const toggleEditEnabled = useAppSelector((state) => state.toggle.isToggledEdit);
    const route = useRoute();
    const screenName = route.name.toUpperCase() as GridTitleEnum;
    const {handleHide,hiddenTiles} = useHideTilesContext();
    const { editTile } = useEditTilesContext();
    const {handleWord} = useSpeak_UpdateSentence();
    if(toggleHideEnabled) return () => handleHide(tile);
    if(toggleEditEnabled) return () => editTile(TileMapper.toCustomWordDTO(tile,screenName));
    // else if(hiddenTiles.includes(tile.coordinates)) return () => {};
    // else return () => handleWord(tile.wordToDisplay, tile.wordToSpeak);
}
