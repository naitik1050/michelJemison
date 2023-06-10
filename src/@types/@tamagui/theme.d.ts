// // @tamagui/theme.d.ts
//
//
// declare module '@tamagui/theme' {
//     import {ThemeName} from "tamagui";
//     export type ExtendedThemeName = ThemeName | 'error' | 'success' | 'warning';
//
//     export interface ThemeProps {
//         className?: string;
//         name?: Exclude<ExtendedThemeName, number> | null;
//         componentName?: string;
//         children?: any;
//         reset?: boolean;
//         debug?: DebugProp | any;
//         inverse?: boolean;
//         forceClassName?: boolean;
//         shouldUpdate?: () => boolean;
//     }
// }
