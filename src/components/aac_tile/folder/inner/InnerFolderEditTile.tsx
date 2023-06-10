import {Square} from "tamagui";
import EditIcon from "../../../../assets/images/editIcon.svg";
import React from "react";
import {useSelector} from "react-redux";
import {selectIsToggledEdit} from "../../../../redux/app/toggleSlice";
import {useEditTile} from "../../tiles/edit/useEditTile";
import {CustomWordDTO, Tile} from "../../../../@types/model_";
import {useEditTilesContext} from "../../tiles/edit";

export const InnerFolderEditTile = (
    {
        tile,
    }:
        {
            tile: Tile,
        }
)  => {
    const edit = useSelector(selectIsToggledEdit);
    const {editTile} = useEditTilesContext();
    return (
        edit ?
        <Square
            onPress={() => editTile(tile)}
            style={{
                position: "absolute",
                top: 5,
                right: 7,
                padding: 7,
            }}
        >
            <EditIcon width={15} height={15}/>
        </Square>
            : null
    )
}