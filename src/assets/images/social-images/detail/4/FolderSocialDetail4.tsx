import {Folder} from "../../../../../@types/image";
import myNameIs from "./label with name_47134 1.svg";
import {socialRepresentativeTileGlobal} from "../../index";

export const FolderSocialDetail4: Folder = {
    representativeTile: {
        ...socialRepresentativeTileGlobal,
        key:socialRepresentativeTileGlobal.key+"_4"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: { value: myNameIs },
            },
            wordToDisplay: "My name is",
            wordToSpeak: "My name is"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: " 🚫🗣" },
            },
            wordToDisplay: "I am non-speaking",
            wordToSpeak: "I am non-speaking"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "📲💬" },
            },
            wordToDisplay: "I use this device to talk",
            wordToSpeak: "I use this device to talk"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "🙋💬" },
            },
            wordToDisplay: "I have something to say",
            wordToSpeak: "I have something to say"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "🔄" },
            },
            wordToDisplay: "can you repeat that?",
            wordToSpeak: "can you repeat that?"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "📣" },
            },
            wordToDisplay: "can you repeat that?",
            wordToSpeak: "can you repeat that?"
        },
    ]
};
