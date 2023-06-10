import {useAppSelector} from "../../@types/redux_component.d";
import {selectSentenceDisplay, selectSentenceSpeak, selectWords} from "../../redux/app/sentenceSlice";
import {usePostAACSentenceMutation} from "../../redux/api/aacApiSlice";
import useSpeak from "./useSpeak";
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../redux/api/authSlice";

export default () => {
    const sentenceDisplay = useAppSelector(selectSentenceDisplay);
    const sentenceSpeak = useAppSelector(selectSentenceSpeak);
    const words = useAppSelector(selectWords);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const { handleSpeak } = useSpeak();
    const [
        aacMutation, {},
    ] = usePostAACSentenceMutation();
    const speakSentence = async () => {
        if(!await handleSpeak(sentenceSpeak)) return;
        isLoggedIn && aacMutation({words, sentence: sentenceDisplay});
    }

    return {sentence:sentenceDisplay, speakSentence};
}