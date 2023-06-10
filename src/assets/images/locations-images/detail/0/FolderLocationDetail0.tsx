import {Folder} from "../../../../../@types/image";
import Near1 from "./Near_47555.svg"
import Above from "./Above.svg"
import Next from "./next to_16810 1.svg"
import Away from "./move away_16814 1.svg"
import Under from "./under_16877 1.svg"
import {locationRepresentativeTileGlobal} from "../../index";

export const FolderLocationDetail0: Folder = {
    representativeTile: {
        ...locationRepresentativeTileGlobal,
        key: locationRepresentativeTileGlobal.key + "_0"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: {value: Near1},
            },
            wordToDisplay: "near",
            wordToSpeak: "near"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Above},
            },
            wordToDisplay: "far",
            wordToSpeak: "far"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Next},
            },
            wordToDisplay: "next",
            wordToSpeak: "next"
        },

        {
            assetRecord: {
                type: "svg",
                asset: {value: Away},
            },
            wordToDisplay: "away",
            wordToSpeak: "away"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Above},
            },
            wordToDisplay: "above",
            wordToSpeak: "above"
        },

        {
            assetRecord: {
                type: "svg",
                asset: {value: Under},
            },
            wordToDisplay: "under",
            wordToSpeak: "under"
        },


    ]
};
