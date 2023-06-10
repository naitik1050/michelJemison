import { X } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import {
    Adapt,
    Button,
    Dialog,
    Fieldset,
    Input,
    Label,
    Paragraph,
    Sheet,
    TooltipSimple,
    Unspaced,
    XStack,
    YStack,
} from 'tamagui'
import {useAppDispatch, useAppSelector} from "../../../../@types/redux_component.d";
import {toggleDialogUnauthorized, toggleSetting} from "../../../../redux/app/toggleSlice";


export const DialogInstance = () => {
    const {
        isToggledDialogUnauthorized
    } = useAppSelector(state => state.toggle);
    const dispatch = useAppDispatch();
    return (
        <Dialog
            modal
            open={isToggledDialogUnauthorized}
            onOpenChange={() => dispatch(toggleDialogUnauthorized())}
        >
            <Adapt when="sm" platform="touch" >
                <Sheet zIndex={200000} modal dismissOnSnapToBottom>
                    <Sheet.Frame padding="$4" space>
                        <Adapt.Contents />
                    </Sheet.Frame>
                    <Sheet.Overlay  />
                </Sheet>
            </Adapt>

            <Dialog.Portal>
                <Dialog.Overlay
                    onPress={() => dispatch(toggleDialogUnauthorized())}
                    key="overlay"
                    animation="quick"
                    opacity={0.5}
                    enterStyle={{ opacity: 0 }}
                    exitStyle={{ opacity: 0 }}


                />

                <Dialog.Content
                    bordered
                    elevate
                    key="content"
                    animation={[
                        'quick',
                        {
                            opacity: {
                                overshootClamping: true,
                            },
                        },
                    ]}
                    enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
                    exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
                    space
                >
                    <Dialog.Title >Account Needed</Dialog.Title>
                    <Dialog.Description justifyContent={"center"} alignSelf={"center"}>
                       You must Login or Signup to use this feature
                    </Dialog.Description>


                    <XStack alignSelf="flex-end" space>

                        <Dialog.Close displayWhenAdapted asChild>
                            {/*<NavigateToLoginButton/>*/}
                        </Dialog.Close>
                    </XStack>

                    <Unspaced>
                        <Dialog.Close asChild>
                            <Button
                                position="absolute"
                                top="$3"
                                right="$3"
                                size="$2"
                                circular
                                icon={X}
                            />
                        </Dialog.Close>
                    </Unspaced>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog>
    )
}