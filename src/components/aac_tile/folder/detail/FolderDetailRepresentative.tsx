import BackIcon from "../../../../assets/images/backIcon.svg";
import {Image, Text, XStack} from "tamagui";
import {colors} from "../../../../assets/colors";
import {responsiveFontSize} from "react-native-responsive-dimensions";
import React, {useEffect} from "react";
import {useFolderContext} from "../FolderContext";
import {AssetRecordFactory} from "../../../AssetRecordFactory";

export const FolderDetailRepresentative = () => {
    const {goBackFromFolder, folderSelected} = useFolderContext();
    useEffect(()=>{
        if(!folderSelected) return;
        if(!folderSelected.representativeTile) return;
    },[folderSelected])
    return (
        <XStack justifyContent={"center"} ai={"center"} onPress={() => goBackFromFolder()}>
                <BackIcon width={14} height={14}/>
            <XStack justifyContent={"center"} alignItems={"center"}>
                <AssetRecordFactory
                    assetRecord={folderSelected.representativeTile.assetRecord}
                    width={14}
                    height={14}
                />
                <Text
                    color={folderSelected.representativeTile.color}
                    fontFamily={"AvenirNextCyrDemi"}
                    fos={responsiveFontSize(1.2)}
                    ml={3}
                >
                    {folderSelected.representativeTile.wordToDisplay}
                </Text>
            </XStack>

        </XStack>
    );
}