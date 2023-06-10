import {Square, styled, Text} from "tamagui";
//Originally a touchable opacity
//  style={{
//                   paddingHorizontal: 10,
//                   paddingVertical: 10,
//                   justifyContent: "center",
//                   alignItems: "center",
//                   width: "45%",
//                   borderRadius: 10,
//                   backgroundColor: bg,
//                   marginTop: 10,
//                 }}
export const StyledTile = styled(Square, {
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "45%",
    borderRadius: 10,
    marginTop: 10,
    animation:"bouncy",
    pressStyle:{
        scale: 0.70
    },

/*    $gtXs: {
        backgroundColor: 'blue',
        height: 0.097,
        width: 0.09,
        borderRadius: 10
    },
    $gtSm: {
        backgroundColor: 'blue',
        height: 0.11,
        width: 0.10,
        borderRadius: 20
    },
    $gtMd: {
        backgroundColor: 'green',
        height: 0.115,
        width: 0.105,
        borderRadius: 6
    },
    $gtLg: {
        backgroundColor: 'pink',
        height: 0.112,
        width: 0.116,
        borderRadius: 10
    }*/
})
