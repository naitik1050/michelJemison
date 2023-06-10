import {colors, height} from "../../../assets/colors";
import {Stack, XStack} from "tamagui";
import FolderSub from "./main/FolderSub";
import React from "react";
import {useFolderContext} from "./FolderContext";
import {Topbar} from "../../top_bar";
import FolderDetail from "./detail/FolderDetail";
import {MainScreenCards} from "../../MainScreenCards";

export const SelectedFolderOrMainScreen = () => {
    const {isFolderSelected, isFolderDetailSelected} = useFolderContext();;

    return (
        <Stack f={1} bg={colors.white} pt={height / 15}>
            <XStack width={"95%"} als={"center"} jc={"space-between"}>
                <Topbar/>
            </XStack>
            {isFolderDetailSelected
                ? <FolderDetail/>
                : isFolderSelected
                    ? <FolderSub/>
                    : <MainScreenCards/>
            }
        </Stack>
    )
}
