import BackIcon from "../../../../assets/images/backIcon.svg";
import {Image, Text, XStack} from "tamagui";
import {colors} from "../../../../assets/colors";
import {responsiveFontSize} from "react-native-responsive-dimensions";
import React, {useEffect} from "react";
import {useFolderContext} from "../FolderContext";
import {AssetRecordFactory} from "../../../AssetRecordFactory";

export const FolderRepresentative = () => {
    const {goBackFromFolder, folderSelected} = useFolderContext();
    useEffect(()=>{
        if(!folderSelected) return;
        if(!folderSelected.representativeTile) return;
    },[folderSelected])
    return (
        <XStack jc="space-between" ai={"center"} m={15} onPress={() => goBackFromFolder()}>
                <BackIcon width={10} height={20}/>
            <XStack>
                <AssetRecordFactory
                    assetRecord={folderSelected.representativeTile.assetRecord}
                    width={28}
                    height={28}
                />
                <Text
                    color={colors.primaryColorTwo}
                    fontFamily={"AvenirNextCyrDemi"}
                    fos={responsiveFontSize(1.7)}
                    ml={3}
                >
                    {folderSelected.representativeTile.wordToDisplay}
                </Text>
            </XStack>

        </XStack>
    );
}