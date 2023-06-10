import { Stack, styled} from "tamagui";
import {StyledHierarchy} from "./StyledHierarchy";

//      <Stack
//                         height={"90%"}
//                         width={"23%"}
//                         overflow="hidden"
//                         boc={colors.light}
//                         bw={0.5}
//                         br={12}
//                         bg={colors.white}
//                     >
export const StyledTallContainer = styled(StyledHierarchy, {
    $gtXs: {
        height: "90%",
        width:"23%",
        bw: 0.5,
        borderRadius: 12
    },
    $gtSm: {
        height: "90%",
        width:"23%",
        bw: 0.5,
        borderRadius: 12
    },
    $gtMd: {
        height: "90%",
        width:"23%",
        bw: 0.5,
        borderRadius: 12
    },
    $gtLg: {
        height: "90%",
        width:"23%",
        bw: 0.5,
        borderRadius: 12
    }
})