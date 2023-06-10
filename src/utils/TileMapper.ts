import {CustomTile, CustomWordDTO, GridTitleEnum, Tile} from "../@types/model_";
import TileHelper from "./TileHelper";

export default abstract class TileMapper {

    // static fromCustomWordDTOs(dtos: CustomWordDTO[]): Tile[] {
    //     return dtos.map((dto) => ({
    //         gridColumn: dto.gridColumn,
    //         gridRow: dto.gridRow,
    //         wordToDisplay: dto.wordToDisplay,
    //         wordToSpeak:dto.wordToSpeak,
    //         gridTitleEnum:dto.gridTitleEnum,
    //         imagePath:dto.imagePath,
    //         coordinates: TileHelper.generateCoordinates(dto.gridRow,dto.gridColumn),
    //         hidden: false,
    //     }));
    // }

    static fromCustomWordDTOs(dtos: CustomWordDTO[]): Tile[] {
        return dtos.map((dto) => ({
            gridColumn: dto.gridColumn,
            gridRow: dto.gridRow,
            gridTitleEnum: dto.gridTitleEnum,
            wordToDisplay: dto.wordToDisplay,
            wordToSpeak: dto.wordToSpeak,
            imagePath: dto.imagePath,
            coordinates: TileHelper.generateCoordinates(dto.gridRow, dto.gridColumn),
            bg: "#F6F6F6",
            color: "#5F5C5C",
        }));
    }



    static toCustomWordDTO(tile: Tile, screenName: GridTitleEnum): CustomWordDTO {
        return {
            wordToDisplay: tile.wordToDisplay,
            wordToSpeak: tile.wordToDisplay,
            imagePath: undefined,
            gridRow: tile.gridRow,
            gridColumn: tile.gridColumn,
            gridTitleEnum: screenName,
        };
    }

}