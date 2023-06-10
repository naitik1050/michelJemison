import {XStack} from "tamagui";
import {responsiveHeight} from "react-native-responsive-dimensions";
import {StyledColumn} from "./aac_tile/hierarchy/column/StyledColumn";
import {StyledShortContainer, StyledTallContainer} from "./aac_tile/hierarchy/styled";
import FolderMainCard from "./FolderMainCard";
import {
    FolderMainAction,
    FolderMainDescriptor,
    FolderMainLocation,
    FolderMainPronoun, FolderMainQuestion,
    FolderMainSocial
} from "../assets/images";
import arrowtwo from "../assets/images/right_arrow_yellow.svg";
import arrowthree from "../assets/images/right_arrow_blue.svg";
import arrowfour from "../assets/images/right_arrow_green.svg";
import arrowfive from "../assets/images/right_arrow_orange.svg";
import {FolderSubCard} from "./aac_tile/folder/FolderSubCard";
import arrowseven from "../assets/images/right_arrow_purple.svg";
import React from "react";

export const MainScreenCards = () => {
    return (
        <XStack
            w={"95%"}
            als={"center"}
            jc={"space-between"}
            mt={responsiveHeight(3)}
            h={"95%"}
        >
            {/* 1 */}
            <StyledColumn>
                <StyledShortContainer>
                    <FolderMainCard
                        folder={FolderMainPronoun}
                        bg={"#F8DDDD"}
                        color={"#CC4A4A"}
                        // Icon={arrowone}
                    />
                </StyledShortContainer>
                <StyledShortContainer>
                    <FolderMainCard
                        folder={FolderMainSocial}
                        bg={"#FFF5D2"}
                        color={"#DFB317"}
                        Icon={arrowtwo}
                    />
                </StyledShortContainer>
            </StyledColumn>
            {/* 2 */}

            <StyledTallContainer>
                <FolderMainCard
                    folder={FolderMainAction}
                    bg={"#DAF0FC"}
                    color={"#2F769D"}
                    folderTitle={"mainLong"}
                    Icon={arrowthree}
                />
            </StyledTallContainer>

            {/* 3 */}

            <StyledColumn>
                <StyledShortContainer>
                    <FolderMainCard
                        folder={FolderMainDescriptor}
                        bg={"#EDF8DD"}
                        color={"#72A52D"}
                        Icon={arrowfour}
                    />
                </StyledShortContainer>
                <StyledShortContainer>
                    <FolderMainCard
                        folder={FolderMainLocation}
                        bg={"#F8EADD"}
                        color={"#E47E1F"}
                        Icon={arrowfive}
                    />
                </StyledShortContainer>
            </StyledColumn>
            {/* 4 */}

            <StyledColumn>
                <StyledShortContainer>
                    <FolderMainCard
                        folder={FolderMainQuestion}
                        bg={"#EBEBEB"}
                        color={"#5F5C5C"}
                        // Icon={arrowsix}
                    />
                </StyledShortContainer>
                <StyledShortContainer>
                    <FolderSubCard
                        title={"Topics"}
                        bg={"#DFDCFF"}
                        color={"#4B3AFF"}
                        Icon={arrowseven}
                    />
                </StyledShortContainer>
            </StyledColumn>
        </XStack>
    )
};