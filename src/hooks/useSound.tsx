import {Platform} from "react-native";
import {Audio, AVPlaybackSource} from "expo-av";
import * as React from "react";
import {SoundAssets} from "../assets/sounds/SoundAssets";
const soundObject = new Audio.Sound();
export default () => {
    const enableSound = async () => {
        if (Platform.OS === "ios") {
            await Audio.setAudioModeAsync({
                playsInSilentModeIOS: true,
            });
            await soundObject.loadAsync(SoundAssets.blankToAllowExpoSpeechToWorkOnSilent.asset.value as unknown as AVPlaybackSource);
            await soundObject.playAsync();
        }
    };

    React.useEffect(() => {
        enableSound();
    },[]);
}