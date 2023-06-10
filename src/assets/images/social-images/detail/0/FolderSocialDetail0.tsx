import {Folder} from "../../../../../@types/image";
import {socialRepresentativeTileGlobal} from "../../index";

export const FolderSocialDetail0: Folder = {
    representativeTile: {
        ...socialRepresentativeTileGlobal,
        key:socialRepresentativeTileGlobal.key+"_0"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "text",
                asset: { value: "👋" },
            },
            wordToDisplay: "hi",
            wordToSpeak: "hi"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "🤔👋" },
            },
            wordToDisplay: "how are you?",
            wordToSpeak: "how are you"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "🤔🆙" },
            },
            wordToDisplay: "whats up?",
            wordToSpeak: "whats up"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "🤔🌈" },
            },
            wordToDisplay: "how’s life?",
            wordToSpeak: "hows life"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "☀️" },
            },
            wordToDisplay: "good morning/afternoon!",
            wordToSpeak: "good morning or afternoon"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "🤝" },
            },
            wordToDisplay: "nice to meet you!",
            wordToSpeak: "nice to meet you!"
        },
    ]
};
