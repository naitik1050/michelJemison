import React, {useState} from "react";
import {
    Adapt,
    Button,
    Input,
    Label,
    Popover,
    PopoverProps, SelectIcon,
    XStack,
    YGroup,
    YStack,
    Switch, Text, SizeTokens, Separator
} from 'tamagui'
import {useAppDispatch, useAppSelector} from "../../@types/redux_component.d";
import {toggleSetting} from "../../redux/app/toggleSlice";
import {SettingsTogglePopoverTrigger} from "./components/SettingsTogglePopoverTrigger";
import {SettingPopoverAuthorized} from "./SettingPopoverAuthorized";
import {SettingsSwitchAggregate} from "./components/SettingsSwitchAggregate";
import {useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../redux/api/authSlice";
import { SettingPopoverUnauthorized } from "./SettingPopoverUnauthorized";

export function SettingsPopOver({
                                    Name,
                                    ...props
                                }: PopoverProps & { Name?: string }) {
    const dispatch = useAppDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const {
        isToggledSetting
    } = useAppSelector(state => state.toggle);
    return (
        <Popover
            open={isToggledSetting}
            onOpenChange={() => dispatch(toggleSetting())}
            size="$5"
            allowFlip
            {...props}
        >
            <SettingsTogglePopoverTrigger/>

            <Adapt when="sm" platform="touch">
                <Popover.Sheet modal dismissOnSnapToBottom>
                    <Popover.Sheet.Frame padding="$4">
                        <Adapt.Contents/>
                    </Popover.Sheet.Frame>
                    <Popover.Sheet.Overlay/>
                </Popover.Sheet>
            </Adapt>

            <Popover.Content
                borderWidth={3}
                borderColor="$borderColor"
                enterStyle={{x: 0, y: -10, opacity: 0}}
                exitStyle={{x: 0, y: -10, opacity: 0}}
                x={0}
                y={0}
                opacity={1}
                animation={[
                    'quick',
                    {
                        opacity: {
                            overshootClamping: true,
                        },
                    },
                ]}
                elevate
            >
                <Popover.Arrow borderWidth={1} borderColor="$borderColor"/>

                <YStack space="$3">
                    <SettingsSwitchAggregate/>
                    {
                        isLoggedIn ? <SettingPopoverAuthorized/> : <SettingPopoverUnauthorized/>
                    }
                </YStack>
            </Popover.Content>
        </Popover>
    )
}

