import React, {useEffect, useState} from "react";
import {Button, Image, Stack, Text, XStack} from "tamagui";
import {colors, height} from "../../assets/colors";
import {
    responsiveHeight,
} from "react-native-responsive-dimensions";
import {ScrollView} from "react-native";
import {Tile} from "../../@types/model_";
import {useTilesContext} from "../aac_tile/tiles";
import {TopbarDeleteButton} from "./TopbarDeleteButton";
import {TopbarSpeakButton} from "./TopbarSpeakButton";
import {TopbarTile} from "./TopbarTile";
import {TopbarEmptyTileMessage} from "./TopbarEmptyTileMessage";
import {KeyboardTextInput} from "./KeyboardTextInput";


export const Topbar = () => {
    const {tiles} = useTilesContext();
    return (
        <>
            <Stack
                width={"80%"}
                height={responsiveHeight(8)}
                overflow="hidden"
                boc={colors.light}
                bw={0.5}
                br={12}
            >
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <>
                        {
                            tiles?.length ?
                                tiles.map((tile: Tile, i: number) => (
                                        <TopbarTile
                                            tile={tile}
                                            i={i}
                                            key={i}
                                        />
                                    )
                                ) : <TopbarEmptyTileMessage/>
                        }
                    </>
                    <KeyboardTextInput/>
                </ScrollView>
            </Stack>
            <TopbarDeleteButton/>
            <TopbarSpeakButton/>
        </>
    );
};