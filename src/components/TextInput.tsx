import React from "react";
import {Stack, Input} from "tamagui";
import {colors, width} from "../assets/colors";
import {KeyboardTypeOptions} from "react-native";

interface ICustomInput {
    Icon?: any;
    placeholder?: string;
    secure?: boolean;
    keyboardType?: KeyboardTypeOptions;
    value?: string;
    createSymbol?: true;
    onChange: Function;
}

// custom textInput
const TextInput = ({
                       Icon,
                       placeholder,
                       secure,
                       keyboardType,
                       value,
                       onChange,
                       createSymbol,
                   }: ICustomInput) => {
    return (
        <Stack
            width={"100%"}
            overflow="hidden"
            paddingVertical={createSymbol ? 5 : 10}
            paddingHorizontal={12}
            boc={"$light"}
            bw={0.5}
            br={createSymbol ? 10 : 16}
            fd={"row"}
            ai={"center"}
        >
            {Icon ? <Icon width={20} height={20}/> : null}
            <Input
                focusStyle={{borderColor: "transparent"}}
                boc={"transparent"}
                fos={17}
                color={"$darkGray"}
                placeholderTextColor={"#474847"}
                opacity={0.7}
                placeholder={placeholder}
                fontFamily={"AvenirNextCyrMedium"}
                secureTextEntry={secure}
                keyboardType={keyboardType}
                value={value}
                autoCapitalize={"none"}
                autoCorrect={false}
                onChangeText={(val) => onChange(val)}
                width={"100%"}
            />
        </Stack>
    );
};

export default TextInput;
