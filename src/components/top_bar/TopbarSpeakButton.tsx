import {Button} from "tamagui";
import {colors} from "../../assets/colors";
import {responsiveHeight} from "react-native-responsive-dimensions";
import SendAI from "../../assets/images/createimage-active.svg";
import Send from "../../assets/images/send.svg";
import React from "react";
import useSpeak from "../../hooks/speak/useSpeak";
import useSpeak_AI_SaveSentence from "../../hooks/speak/useSpeak_AI_SaveSentence";
import {useAppSelector} from "../../@types/redux_component.d";
import {selectIsToggledAI} from "../../redux/app/toggleSlice";
import {useTilesContext} from "../aac_tile/tiles";

export const TopbarSpeakButton = () => {
    const {tiles} = useTilesContext();
    const {handleSpeak} = useSpeak();
    const {handleSpeakAI} = useSpeak_AI_SaveSentence();
    const isToggledAI = useAppSelector(selectIsToggledAI);
    return (
        <Button
            onPress={() => isToggledAI ? handleSpeakAI() : handleSpeak(tiles.map(word => word.wordToSpeak).join(" "))}
            pressStyle={{
                bg: colors.primaryColorTwo,
                borderColor: colors.white,
                borderWidth: 2,
            }}
            width={"8%"}
            height={responsiveHeight(8)}
            overflow="hidden"
            br={12}
            ai={"center"}
            bg={colors.primaryColor}
            jc={"center"}
        >
            {
                isToggledAI ? <SendAI width={25} height={25}/>
                    : <Send width={25} height={25}/>
            }
        </Button>
    );
}