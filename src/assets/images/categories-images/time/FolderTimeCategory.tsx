import {Assets, Folder} from "../../../../@types/image";
import Morning from "./morning.svg";
import Last from "./last.svg";
import First1 from "./first 1.svg";
import Yesterday from "./yesterday.svg";
import Today from "./today.svg";
import Before from "./before.svg";
import After from "./after.svg";
import Then from "./then.svg";

export const FolderTimeCategory: Folder = {
    representativeTile: {
        assetRecord: {
            type: "svg",
            asset: { value: Last },
        },
        wordToDisplay: "Time",
        wordToSpeak: "Time",
        bg: "#F6F6F6",
        color: "#5F5C5C",
        key: "time"
    },

    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: { value: Morning },
            },
            wordToDisplay: "morning",
            wordToSpeak: "morning"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Last },
            },
            wordToDisplay: "last",
            wordToSpeak: "last"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: First1 },
            },
            wordToDisplay: "first",
            wordToSpeak: "first"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Yesterday },
            },
            wordToDisplay: "yesterday",
            wordToSpeak: "yesterday"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Today },
            },
            wordToDisplay: "today",
            wordToSpeak: "today"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Before },
            },
            wordToDisplay: "before",
            wordToSpeak: "before"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: After },
            },
            wordToDisplay: "after",
            wordToSpeak: "after"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Then },
            },
            wordToDisplay: "then",
            wordToSpeak: "then"
        },
    ],
};
