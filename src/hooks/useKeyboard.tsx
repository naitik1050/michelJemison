import {useRef, useState} from "react";
import {TextInput} from "react-native";
import useSpeak_UpdateSentence from "./speak/useSpeak_UpdateSentence";


export default (toggleSpeechBubble:()=>void) => {
    const textInputRef = useRef<TextInput>(null);
    const [displayText, setDisplayText] = useState<string>('');
    const {handleWord} = useSpeak_UpdateSentence();
    const handleChangeText = (value: string) => {
        setDisplayText(value);
    };
    const handleSubmitEditing = async () => {
        toggleSpeechBubble();
        await handleWord(displayText.toLowerCase().trim());
        setDisplayText('');
    };

    return {textInputRef, displayText,handleChangeText , handleSubmitEditing};
}