import { useAppDispatch } from "../../@types/redux_component.d";
import { updateSentence } from "../../redux/app/sentenceSlice";
import useSpeak from "./useSpeak";

export default () => {
    const dispatch = useAppDispatch();

    const { handleSpeak } = useSpeak();

    const handleWord = async (wordToDisplay: string, wordToSpeak: string = wordToDisplay) => {
        if (!await handleSpeak(wordToSpeak)) return;
        dispatch(updateSentence({speak: wordToSpeak, display:wordToDisplay,timestamp: new Date().toISOString() }));
    };

    return { handleWord };
};
