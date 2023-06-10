import { Text, styled} from "tamagui";

//this is the Title of each wordcard
export const StyledHierarchyTitle = styled(Text, {
    backgroundColor: "red",
    overflow: "hidden",
    borderColor: "$light",
    fontFamily:'$avenirNextCyrDemiFont',
    $gtXs: {
        height: "49%",
        borderWidth: 12,
        borderRadius: 12
    },
    $gtSm: {
        height: "49%",
        borderWidth: 12,
        borderRadius: 12
    },
    $gtMd: {
        height: "49%",
        borderWidth: 12,
        borderRadius: 12
    },
    $gtLg: {
        height: "49%",
        borderWidth: 12,
        borderRadius: 12
    }
})