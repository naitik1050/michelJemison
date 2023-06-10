import React, {useEffect, useState} from "react";
import {Image, Stack, Text, XStack, YStack} from "tamagui";
import {colors} from "../../../../assets/colors";
import {
    ScrollView,
} from "react-native";
import {
    responsiveHeight,
} from "react-native-responsive-dimensions";

import {useFolderContext} from "../FolderContext";
import {FolderRepresentative} from "./FolderRepresentative";
import {FolderSubRepresentativeHorizontalScrollView} from "./FolderSubRepresentativeHorizontalScrollView";
import {FolderDataNotFound} from "./FolderDataNotFound";
import {FolderGrid} from "./FolderGrid";
import {getFolderTileCount} from "../../../../utils/FolderHelper";

const FolderSub = () => {
    const { folderSelected } = useFolderContext();
    return (
        <Stack
            my={responsiveHeight(4)}
            width={"95%"}
            als={"center"}
            height={responsiveHeight(72)}
            overflow="hidden"
            boc={colors.light}
            bw={0.5}
            br={12}
            // p={15}
        >
            <ScrollView>

                <XStack jc="space-between" ai={"center"} m={15}>
                    {folderSelected && <FolderRepresentative/>}
                    <FolderSubRepresentativeHorizontalScrollView/>
                </XStack>
                <XStack fw="wrap">
                    {getFolderTileCount(folderSelected) ? <FolderGrid /> : <FolderDataNotFound/>}
                </XStack>
            </ScrollView>
        </Stack>
    );
};

export default FolderSub;
