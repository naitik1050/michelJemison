import { Stack, styled} from "tamagui";
import {StyledHierarchy} from "./StyledHierarchy";

//this was the stack that was surrounding the  FolderMainCard
//        <Stack
//               height={"49%"}
//               overflow="hidden"
//               boc={colors.light}
//               bw={0.5}
//               br={12}
//               bg={colors.white}
//             >
export const StyledShortContainerNoBorder = styled(StyledHierarchy, {
    $gtXs: {
        height: "49%",
    },
    $gtSm: {
        height: "49%",
    },
    $gtMd: {
        height: "49%",
    },
    $gtLg: {
        height: "49%",
    }
})