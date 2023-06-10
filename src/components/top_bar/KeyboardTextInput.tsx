import {TextInput} from "react-native";
import {useKeyboardContext} from "../keyboard/KeyboardContext";
import {responsiveHeight} from "react-native-responsive-dimensions";
import {colors} from "../../assets/colors";
import {Stack} from "tamagui";
import {useState} from "react";
import {useTilesContext} from "../aac_tile/tiles";

export const KeyboardTextInput = () => {
    const {focus, handleFocus, inputRef} = useKeyboardContext();
    const { invokeTile } = useTilesContext();
    const [displayText, setDisplayText] = useState<string>('');
    const handleChangeText = (value: string) => {
        setDisplayText(value);
    };

    const handleSubmitEditing = () => {
        const word = displayText.toLowerCase().trim();
        setDisplayText('');
        handleFocus(false);
        if(displayText == "") return;
        invokeTile({
            wordToDisplay: word,
            wordToSpeak: word,
            bg: "#EBEBEB",
            color: "#5F5C5C",
            gridRow: -1,
            gridColumn: -1,
            gridTitleEnum: "",
            coordinates: ""
        })
    };
    return (
        focus ?
        <Stack
            width={"80%"}
            height={responsiveHeight(8)}
            overflow="hidden"
            boc={colors.light}
            bw={0.5}
            br={12}
            justifyContent="center"
        >
            <TextInput
                ref={inputRef}
                autoCapitalize={"none"}
                autoCorrect={false}
                autoFocus={false}
                onChangeText={handleChangeText}
                onSubmitEditing={handleSubmitEditing}
                onFocus={() => handleFocus(true)}
                value={displayText}
                placeholderTextColor={"#474847"}
                style={{
                    color: "#474847",
                    fontSize: 16,
                    marginLeft: 10,
                    opacity: 0.7,
                }}
            />

        </Stack> : null
    )
}