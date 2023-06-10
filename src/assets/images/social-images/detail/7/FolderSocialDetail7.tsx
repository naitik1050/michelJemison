import {Folder} from "../../../../../@types/image";
import {socialRepresentativeTileGlobal} from "../../index";

export const FolderSocialDetail7: Folder = {
    representativeTile: {
        ...socialRepresentativeTileGlobal,
        key:socialRepresentativeTileGlobal.key+"_7"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "text",
                asset: { value: "🫡️👋" },
            },
            wordToDisplay: "goodbye",
            wordToSpeak: "goodbye"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "✌️👋" },
            },
            wordToDisplay: "peace out",
            wordToSpeak: "peace out"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "👀👋" },
            },
            wordToDisplay: "acceptance*",
            wordToSpeak: "disappointment/disapproval"
        },
    ]
};
