import {Label, SizeTokens, Switch, XStack} from "tamagui";
import React, {useId} from "react";

interface SwitchWithLabelProps {
    size: SizeTokens;
    label: string;
    toggleSwitch: boolean;
    setToggleSwitch: () => void;
}

export const SettingsSwitchWithLabel = (props: SwitchWithLabelProps) => {
    const id = useId();
    return (
        <XStack width={150} alignItems="center" space="$4">
            <Label
                paddingRight="$0"
                minWidth={90}
                justifyContent="flex-end"
                size={props.size}
                htmlFor={id}

            >
                {props.label}
            </Label>
            <Switch
                id={id}
                size={props.size}
                checked={props.toggleSwitch}
                onPress={() => props.setToggleSwitch()}
                backgroundColor={props.toggleSwitch ? "green" : "$borderColor"}>
                <Switch.Thumb
                    animation="quick"
                    backgroundColor={"white"}

                />
            </Switch>
        </XStack>
    )
}