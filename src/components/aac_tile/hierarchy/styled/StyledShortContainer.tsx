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
export const StyledShortContainer = styled(StyledHierarchy, {
    $gtXs: {
        height: "49%",
        bw: 0.5,
        borderRadius: 12
    },
    $gtSm: {
        height: "49%",
        bw: 0.5,
        borderRadius: 12
    },
    $gtMd: {
        height: "49%",
        bw: 0.5,
        borderRadius: 12
    },
    $gtLg: {
        height: "49%",
        bw: 0.5,
        borderRadius: 12
    }
})