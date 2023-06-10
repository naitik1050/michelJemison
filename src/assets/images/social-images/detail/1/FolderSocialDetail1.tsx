import {Folder} from "../../../../../@types/image";
import greenCheckMark from "./greencheckmark.png";
import RedX from "./RedX.png";
import {socialRepresentativeTileGlobal} from "../../index";


export const FolderSocialDetail1: Folder = {
    representativeTile: {
        ...socialRepresentativeTileGlobal,
        key:socialRepresentativeTileGlobal.key+"_1"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "text",
                asset: { value: "🙏🙌" },
            },
            wordToDisplay: "I appreciate it",
            wordToSpeak: "i appreciate it"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "🙏😊" },
            },
            wordToDisplay: "thank you",
            wordToSpeak: "thank you"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "" },
            },
            wordToDisplay: "no problem",
            wordToSpeak: "no problem"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "👍🌟" },
            },
            wordToDisplay: "you’re welcome",
            wordToSpeak: "you’re welcome"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: greenCheckMark },
            },
            wordToDisplay: "yes",
            wordToSpeak: "yes"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: RedX },
            },
            wordToDisplay: "no",
            wordToSpeak: "no"
        },
    ]
};
