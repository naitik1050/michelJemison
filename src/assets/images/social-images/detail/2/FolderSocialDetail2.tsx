import {Folder} from "../../../../../@types/image";
import {socialRepresentativeTileGlobal} from "../../index";


export const FolderSocialDetail2: Folder = {
    representativeTile: {
        ...socialRepresentativeTileGlobal,
        key:socialRepresentativeTileGlobal.key+"_2"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "text",
                asset: { value: "👍😊" },
            },
            wordToDisplay: "I’m fine",
            wordToSpeak: "I’m fine"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "👎😔" },
            },
            wordToDisplay: "I’m not good",
            wordToSpeak: "I’m not good"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "🤷" },
            },
            wordToDisplay: "i don’t know",
            wordToSpeak: "i don’t know"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "🙅" },
            },
            wordToDisplay: "leave me alone",
            wordToSpeak: "leave me alone"
        },
    ]
};
