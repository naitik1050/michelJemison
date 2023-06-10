import {responsiveFontSize, responsiveHeight} from "react-native-responsive-dimensions";
import {Text, YStack} from "tamagui";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {selectIsToggledEdit} from "../../../../redux/app/toggleSlice";
import { Tile} from "../../../../@types/model_";
import {StyledFolderTile} from "./styled/StyledFolderTile";
import {StyledEditInnerFolderTile} from "./styled/StyledEditInnerFolderTile";
import {useEditTilesContext} from "../../tiles/edit";

export const InnerFolderTileEmpty = (
    {
        tile,
    }:
        {
            tile: Tile ,
        }
) => {
    const edit = useSelector(selectIsToggledEdit);
    const {editTile} = useEditTilesContext();

    return (
        edit ?
            <StyledEditInnerFolderTile
                onPress={edit ? () => editTile(tile) : () => {}}


            >
                <YStack ai={"center"}>
                    <Text
                        numberOfLines={1}
                        ta={"center"}
                        fos={responsiveFontSize(2)}
                        fontFamily={"AvenirNextCyrRegular"}
                        color={"$primaryColor"}
                        // marginRight={5}
                        mt={5}
                    >+</Text>
                </YStack>
            </StyledEditInnerFolderTile>
            :
            <StyledFolderTile
                borderWidth={0}
                height={75}
                paddingVertical={responsiveHeight(2.8)}
            ></StyledFolderTile>

    );
}