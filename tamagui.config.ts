import {createAnimations} from "@tamagui/animations-react-native";

import {createInterFont} from "@tamagui/font-inter";

import {createMedia} from "@tamagui/react-native-media-driver";

import {shorthands} from "@tamagui/shorthands";

import {themes, size, space, radius, zIndex} from "@tamagui/themes"; //removed tokesn from here

import {createFont, createTamagui, createTokens} from "tamagui";
import {animations} from "@tamagui/config";
import {color} from "@tamagui/themes";

const headingFont = createInterFont();
const bodyFont = createInterFont();

const avenirNextCyrDemiFont = createFont({
    family: 'AvenirNextCyrDemi',
    size: {
        1: 12,
        2: 14,
        3: 15,
        // ...
    },
    lineHeight: {
        1: 17,
        2: 22,
        3: 25,
        // ...
    },
    weight: {
        4: '300',
        6: '600',
    },
    letterSpacing: {
        4: 0,
        8: -1,
    }

})

const tokens = createTokens({
    size,
    space,
    radius,
    zIndex,
    color: {
        ...color,
        primaryColor: "#4B3AFF",
        primaryColorTwo: "#3526DC",
        grey: "#7E8895",
        light: "#BBC0C6",

        black: "#000",
        lightgrey: "#f8f4f4",
        medium: "#6e6969",
        danger: "#ff5252",
        dark: "#0c0c0c",
        grayishBlack: "#2F2E41",
        emirgreen: "#425C5A",
        emiryellow: "#FFCEA2",
        glow: "#50E3C2",
        gldark: "#252B3B",
        red: "#F74E51",
        purple: "#908AE0",
        yellow: "#FAC900",
        green: "#24AD61",
        normangreen: "#29C17E",
        orange: "#F95626",
        darkpurple: "#161533",
        greenspecial: "#2EB065",
        lightgreen: "#E2F0E8",
        lightyellow: "#F3E3B3",
        maingreen: "#24AD61",
        lights: "#F3F4F6",
        gray: "#666666",
        grayOutText: "#A5A5A5",
        darkGray: "#474847",
        blue: "#1C215D",
        blueFaded: "#8D8FAD",
        white: "#FFFFFF",
        newgreen: "#26D367",
        newdarkgreen: "#023834",
        newdarkgreen1: "#043C31",
        fadeBar: "#E9E9E9"

    }
});
const config = createTamagui({

    // defaultTheme: "dark",

    // shouldAddPrefersColorThemes: false,
    // themeClassNameOnRoot: false,
    animations: animations as any,
    shorthands,

    fonts: {
        heading: headingFont,
        body: bodyFont,
        avenirNextCyrDemiFont,
    },
    themes: {
        ...themes,
        error: {
            background: tokens.color.danger,
            color: tokens.color.white
        },
        success: {
            background: tokens.color.green,
            color: tokens.color.white
        },
        warning: {
            background: tokens.color.yellow,
            color: tokens.color.white
        }
    },

    tokens,

    media: createMedia({
        xs: {maxWidth: 660},

        sm: {maxWidth: 800},

        md: {maxWidth: 1020},

        lg: {maxWidth: 1280},

        xl: {maxWidth: 1420},

        xxl: {maxWidth: 1600},

        gtXs: {minWidth: 660 + 1},

        gtSm: {minWidth: 800 + 1},

        gtMd: {minWidth: 1020 + 1},

        gtLg: {minWidth: 1280 + 1},

        short: {maxHeight: 820},

        tall: {minHeight: 820},

        hoverNone: {hover: "none"},

        pointerCoarse: {pointer: "coarse"},
    }),

});
export type AppConfig = typeof config;
declare module "tamagui" {
    // overrides TamaguiCustomConfig so your custom types

    // work everywhere you import `tamagui`

    interface TamaguiCustomConfig extends AppConfig {
    }
}
export default config;
