import {usePostSpeechAIQueryMutation} from "../../redux/api/openAIApiSlice";
import {useEffect} from "react";
import useSpeak from "./useSpeak";
import {useToastController} from "@tamagui/toast";
import {useTilesContext} from "../../components/aac_tile/tiles";

export default () => {
    const {tiles} = useTilesContext();
    const toast = useToastController();
    const {handleSpeak} = useSpeak();
    const [mutation, {data, isSuccess}] = usePostSpeechAIQueryMutation();

    useEffect(() => {
        if (!isSuccess) return;

        async function handleSpeechIfSuccess() {
            await handleSpeak(data!.sentence);
        }

        handleSpeechIfSuccess();

        toast.show(data!.sentence, {
            // message: "",
            //todo: make it so ai can give feedback
            themeCustom: "success",
            duration: 8500,
            // icon: WavingHand
        });
    }, [isSuccess]);

    const speakSentence = async () => {
        const words = tiles.map((tile) => {
            return {
                display: tile.wordToDisplay,
                speak: tile.wordToSpeak,
                timestamp: new Date().toISOString()
            }
        });
        const sentence = tiles.map(word => word.wordToDisplay).join(" ");
        mutation({words, sentence});
    }

    return {handleSpeakAI: speakSentence};
}


//import {selectSentenceSpeak, selectWords} from "../../redux/app/sentenceSlice";
// import {useAppSelector} from "../../@types/redux_component.d";
// import {usePostSpeechAIQueryMutation} from "../../redux/api/openAIApiSlice";
// import {useEffect} from "react";
// import useSpeak from "./useSpeak";
//
// export default () => {
//     const sentence = useAppSelector(selectSentenceSpeak);
//     const words = useAppSelector(selectWords);
//
//     const { handleSpeak } = useSpeak();
//     const [mutation,{data,isSuccess}] = usePostSpeechAIQueryMutation();
//
//     useEffect(() => {
//         async function handleSpeechIfSuccess() {
//             if (isSuccess) {
//                 await handleSpeak(data!.sentence);
//             }
//         }
//         handleSpeechIfSuccess();
//     }, [isSuccess]);
//
//     const speakSentence = async () => {
//         // if(!await validateSpeak(sentence)) return;
//         mutation({words, sentence});
//     }
//
//     return {handleSpeakAI: speakSentence};
// }