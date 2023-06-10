import React from "react";
import { Stack, XStack} from "tamagui";
import {
    responsiveHeight,
} from "react-native-responsive-dimensions";
import uuid from 'react-native-uuid';

import {useFolderContext} from "../FolderContext";
import {StyledColumn} from "../../hierarchy/column/StyledColumn";
import {FolderDetailCard} from "./FolderDetailCard";
import {StyledShortContainerNoBorder} from "../../hierarchy/styled/StyledShortContainerNoBorder";
import {getFolderDetailsByRepresentativeTileKey} from "../../../../assets/images";
import {FolderDetailRepresentative} from "./FolderDetailRepresentative";

const sliceIndices = [[0, 2], [2, 4], [4, 6], [6, 8]];

const FolderDetail = () => {
    const {folderSelected} = useFolderContext();

    return (
        <Stack
            my={responsiveHeight(4)}
            width={"95%"}
            als={"center"}
            height={responsiveHeight(72)}
            overflow="hidden"
        >
            <XStack  ai={"flex-start"} mb={2} ml={15}>
                {folderSelected && <FolderDetailRepresentative/>}
            </XStack>
            <XStack fw="wrap">
                {sliceIndices.map((indices, index) => (
                    <StyledColumn key={index}>
                        {folderSelected && getFolderDetailsByRepresentativeTileKey(folderSelected.representativeTile.key)
                            .slice(indices[0], indices[1])
                            .map((val) => {
                                const cardKey = uuid.v4();
                                return (
                                    <StyledShortContainerNoBorder key={`${cardKey}`}>
                                        <FolderDetailCard
                                            key={`${cardKey}`}
                                            folder={val}
                                        />
                                    </StyledShortContainerNoBorder>
                                )
                            })
                        }
                    </StyledColumn>
                ))}
            </XStack>
        </Stack>
    );
};

export default FolderDetail;
