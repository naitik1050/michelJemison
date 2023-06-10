import {Folder} from "../../../../../@types/image";
import {socialRepresentativeTileGlobal} from "../../index";

export const FolderSocialDetail5: Folder = {
    representativeTile: {
        ...socialRepresentativeTileGlobal,
        key:socialRepresentativeTileGlobal.key+"_5"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "text",
                asset: { value: " 🤩🎉" },
            },
            wordToDisplay: "enthusiasm/approval *",
            wordToSpeak: "enthusiasm/approval"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "🙄😒‍" },
            },
            wordToDisplay: "disappointment/disapproval *",
            wordToSpeak: "disappointment/disapproval"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "🙃🤷‍♂️" },
            },
            wordToDisplay: "acceptance*",
            wordToSpeak: "disappointment/disapproval"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "" },
            },
            wordToDisplay: "joke *",
            wordToSpeak: "joke"
        },

    ]
};
