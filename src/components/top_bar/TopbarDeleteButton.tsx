import {Button} from "tamagui";
import {responsiveHeight} from "react-native-responsive-dimensions";
import {colors} from "../../assets/colors";
import Remove from "../../assets/images/remove.svg";
import React from "react";
import {Tile} from "../../@types/model_";
import {useTilesContext} from "../aac_tile/tiles";

export const TopbarDeleteButton = () => {
    const {tiles, setTiles} = useTilesContext();
    const removeWordsHandle = () => {
        if (tiles.length) {
            setTiles((prev: Tile[]) => prev.slice(0, -1));
        }
    };
    return (
        <Button
            onPress={removeWordsHandle}
            width={"8%"}
            height={responsiveHeight(8)}
            overflow="hidden"
            boc={colors.light}
            bw={0.5}
            br={12}
            bg={colors.white}
            jc={"center"}
            ai={"center"}
        >
            <Remove width={25} height={25}/>
        </Button>
    );
}