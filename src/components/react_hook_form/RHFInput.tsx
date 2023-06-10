import * as React from 'react';
import {Control, Controller, FieldValues, RegisterOptions} from "react-hook-form";
import {KeyboardTypeOptions} from "react-native";
import Input from "../TextInput";
import {Stack, Text, YStack} from "tamagui";

const RHFInput = (
    {
        control,
        rules,
        name,
        placeholder,
        secureTextEntry,
        keyboardType,
        Icon,
    }: {
        control: Control<FieldValues, any>,
        rules?: Omit<RegisterOptions<FieldValues, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"> | undefined,
        name: string,
        placeholder: string,
        secureTextEntry: boolean,
        keyboardType?: KeyboardTypeOptions,
        Icon?: any
    }) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                <YStack>
                    <Input
                        Icon={Icon}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        value={value}
                        secure={secureTextEntry}
                        onChange={onChange}
                    />
                    {error && <Stack marginTop={4}>
                        <Text color="$danger">{error.message || "Error"}</Text>
                    </Stack>
                    }
                </YStack>

            )
            }
        />
    );
};

export default RHFInput;