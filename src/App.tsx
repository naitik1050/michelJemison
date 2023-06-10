import {useFonts} from "expo-font";
import {TamaguiProvider} from "tamagui";
import config from "../tamagui.config";
import MainNavigation from "./navigation/MainNavigation";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {ToastProvider, ToastViewport} from "@tamagui/toast";
import {BaseToast} from "./components/toast/BaseToast";
import {SafeToastViewport} from "./components/toast/SafeToastViewPort";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {KeyboardProvider} from "./components/keyboard/KeyboardProvider";
import useSound from "./hooks/useSound";
import { DialogInstance} from "./components/settings_popover/components/dialog/DialogInstance";
import React from "react";

export default function App() {
    useSound();
    const [loaded] = useFonts({
        AvenirNextCyrRegular: require("./assets/Font/AvenirNextCyr-Regular.ttf"),
        AvenirNextCyrBold: require("./assets/Font/AvenirNextCyr-Bold.ttf"),
        AvenirNextCyrMedium: require("./assets/Font/AvenirNextCyr-Medium.ttf"),
        AvenirNextCyrDemi: require("./assets/Font/AvenirNextCyr-Demi.ttf"),

        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    });
    if (!loaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <TamaguiProvider config={config}>
                <ToastProvider>
                    <KeyboardProvider>
                        <Provider store={store}>
                            <MainNavigation/>
                            <BaseToast/>
                            <SafeToastViewport/>
                            <DialogInstance/>
                        </Provider>
                    </KeyboardProvider>
                </ToastProvider>
            </TamaguiProvider>
        </SafeAreaProvider>
    );
}
