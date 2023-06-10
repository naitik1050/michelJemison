// @tamagui/toast.d.ts

import '@tamagui/toast';
import {ThemeName} from "tamagui";

declare module '@tamagui/toast' {
    export interface CustomData {
        // themeCustom: 'error' | 'success' | 'warning';
        themeCustom: ThemeName;
        icon?: React.FC<{[key: string]: any}>
    }
}