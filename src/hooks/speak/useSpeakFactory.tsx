import {useAppDispatch, useAppSelector} from "../../@types/redux_component.d";
import {selectIsToggledAI} from "../../redux/app/toggleSlice";
import useSpeak_AI_SaveSentence from "./useSpeak_AI_SaveSentence";
import useSpeak_SaveSentence from "./useSpeak_SaveSentence";

export default () => {
    const isToggledAI = useAppSelector(selectIsToggledAI);

    const {speakSentence} = useSpeak_SaveSentence();
    const {handleSpeakAI} = useSpeak_AI_SaveSentence();

    if (isToggledAI) speakSentence();
    else handleSpeakAI();

    return isToggledAI;
}