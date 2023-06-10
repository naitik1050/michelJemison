import {Assets, Folder} from "../../../../@types/image";
import Emotion from "./emotion.svg";
import Angry from "./angry.svg";
import Comfortable from "./comfortable.svg";
import Excited from "./excited.svg";
import Happy from "./happy (1).svg";
import Sick from "./nauseous_sick.svg";
import Nervous from "./nervous.svg";
import Scared from "./scared.svg";
import Tired from "./tired.svg";
import Uncomfortable from "./uncomfortable.svg";

export const FolderFeelingsCategory: Folder = {
    representativeTile: {
        assetRecord: {
            type: "svg",
            asset: {value: Emotion},
        },
        wordToDisplay: "Favorite",
        wordToSpeak: "Favorite",
        bg: "#F6F6F6",
        color: "#5F5C5C",
        key: "favorite"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: {value: Angry},
            },
            wordToDisplay: "angry",
            wordToSpeak: "angry"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Comfortable},
            },
            wordToDisplay: "comfortable",
            wordToSpeak: "comfortable"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Excited},
            },
            wordToDisplay: "excited",
            wordToSpeak: "excited"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Happy},
            },
            wordToDisplay: "happy",
            wordToSpeak: "happy"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Sick},
            },
            wordToDisplay: "sick",
            wordToSpeak: "sick"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Nervous},
            },
            wordToDisplay: "nervous",
            wordToSpeak: "nervous"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Scared},
            },
            wordToDisplay: "scared",
            wordToSpeak: "scared"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Tired},
            },
            wordToDisplay: "tired",
            wordToSpeak: "tired"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Uncomfortable},
            },
            wordToDisplay: "uncomfortable",
            wordToSpeak: "uncomfortable"
        },
    ]
};
