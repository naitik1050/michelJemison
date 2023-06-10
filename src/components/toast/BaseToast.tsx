import {Toast, useToastState} from "@tamagui/toast";
import {Square, useTheme, XStack, YStack} from "tamagui";

export const BaseToast = () => {
    const currentToast = useToastState()
    const theme = useTheme({name: currentToast?.themeCustom});

    if (!currentToast || currentToast.isHandledNatively) return null;
    return (
        <Toast
            key={currentToast.id}
            duration={currentToast.duration}
            enterStyle={{opacity: 0, scale: 0.5, y: -25}}
            exitStyle={{opacity: 0, scale: 1, y: -20}}
            y={0}
            opacity={1}
            scale={1}
            animation="100ms"
            backgroundColor={theme.background}
            viewportName={currentToast.viewportName}
        >
            <XStack>
                <YStack
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Toast.Title
                        color={theme.color}
                        // fontSize={25}
                    >
                        {currentToast.title}
                    </Toast.Title>

                    {!!currentToast.message && (
                        <Toast.Description
                            color={theme.color}
                        >{currentToast.message}</Toast.Description>
                    )}
                </YStack>
                {!!currentToast.icon && (
                    <Square
                        enterStyle={{
                            scale: 1.5,
                            y: -10,
                            opacity: 0,
                        }}
                        animation="bouncy"
                        size={82}
                        opacity={1}
                        scale={1}
                        y={0}
                        borderRadius="$9"
                    >
                        <currentToast.icon />
                    </Square>
                )}
            </XStack>
        </Toast>
    )
}