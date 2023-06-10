import {Folder} from "../../../../../@types/image";
import Do from "./do.svg";
import Use from "./use 1.svg";
import Make from "./make 1.svg";
import {actionRepresentativeTileGlobal} from "../../index";


export const FolderActionDetail4: Folder = {
    representativeTile: {
        ...actionRepresentativeTileGlobal,
        key: actionRepresentativeTileGlobal.key + "_4"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: { value: Use },
            },
            wordToDisplay: "use",
            wordToSpeak: "use"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Make },
            },
            wordToDisplay: "make",
            wordToSpeak: "make"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Do },
            },
            wordToDisplay: "do",
            wordToSpeak: "do"
        },
    ]
};
