import {responsiveFontSize, responsiveHeight} from "react-native-responsive-dimensions";
import {Stack, Text, XStack, YStack} from "tamagui";
import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {Tile} from "../../../@types/model_";
import {selectIsToggledEdit} from "../../../redux/app/toggleSlice";
import {useEditTilesContext} from "../tiles/edit";
import {StyledEditInnerTile} from "./styled/StyledEditInnerTile";
import {StyledTile} from "./styled/StyledInnerTile";


export const InnerTileEmpty = (
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
            <StyledEditInnerTile
                onPress={edit ? () => editTile(tile) : () => {}}
                width={100}
                height={60}
                // alignItems={"center"}
                // justifyContent={"center"}

            >
                <YStack ai={"center"}>
                {/*<XStack alignItems={"center"}>*/}
                    <Text
                        justifyContent={"center"}
                        alignSelf={"center"}
                        // numberOfLines={1}
                        // ta={"center"}
                        fos={responsiveFontSize(2)}
                        fontFamily={"AvenirNextCyrRegular"}
                        color={"$primaryColor"}
                        // marginRight={5}

                    >+</Text>
                    <Text></Text>
                {/*</XStack>*/}
                </YStack>
            </StyledEditInnerTile>
            :
            <StyledTile
                borderWidth={0}
                width={100}
                height={60}
                opacity={0}
                // height={75}
                // paddingVertical={responsiveHeight(2.8)}
            ></StyledTile>

    );
}