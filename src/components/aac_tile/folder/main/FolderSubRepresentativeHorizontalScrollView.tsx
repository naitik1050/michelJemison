import {ImageSourcePropType, TouchableOpacity} from "react-native";
import {Image, Text, XStack, ScrollView} from "tamagui";
import {responsiveFontSize, responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import {colors} from "../../../../assets/colors";
import React, {useEffect, useState} from "react";
import {
    getFolderRepresentativeTilesByWordToDisplay,
    getFolderRepresentativeTiles
} from "../../../../assets/images/categories-images";
import {useFolderContext} from "../FolderContext";
import {AssetRecordFactory} from "../../../AssetRecordFactory";

export const FolderSubRepresentativeHorizontalScrollView = () => {
    const [currentCategoryShownTitle, setCurrentCategoryShownTitle] = useState<string>('');
    const {handleFolder, folderSelected} = useFolderContext();

    useEffect(() => {
        setCurrentCategoryShownTitle(folderSelected.representativeTile.wordToDisplay)
    }, [])

    useEffect(() => {
        handleFolder(getFolderRepresentativeTilesByWordToDisplay(currentCategoryShownTitle)!);
    }, [currentCategoryShownTitle])

    return (
        <ScrollView
            contentContainerStyle={{
                flexDirection: "row",
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {getFolderRepresentativeTiles().map((staticTile, i) => {
                    return (
                        <TouchableOpacity
                            onPress={() => setCurrentCategoryShownTitle(staticTile.wordToDisplay)}
                            activeOpacity={0.5}
                            key={i}
                        >
                            <XStack
                                key={i}
                                jc="center"
                                ai={"center"}
                                w={responsiveWidth(17)}
                                h={responsiveHeight(6)}
                                br={12}
                                bg={
                                    staticTile.wordToDisplay == currentCategoryShownTitle
                                        ? colors.primaryColor
                                        : "rgba(75, 58, 255, 0.1)"
                                }
                                m={7}
                                overflow="hidden"
                            >
                                <AssetRecordFactory
                                    assetRecord={staticTile.assetRecord}
                                    width={25}
                                    height={25}
                                />
                                <Text
                                    numberOfLines={1}
                                    fos={responsiveFontSize(1)}
                                    fontFamily={"AvenirNextCyrDemi"}
                                    color={
                                        staticTile.wordToDisplay == currentCategoryShownTitle ? colors.white : colors.primaryColor
                                    }
                                    m={10}
                                >
                                    {staticTile.wordToDisplay}
                                </Text>
                            </XStack>
                        </TouchableOpacity>
                    );
                }
            )}
        </ScrollView>
    );
}