import {Folder} from "../../../../../@types/image";
import Get from "./get.svg";
import Have from "./have.svg";
import Image23 from "./image 23.svg";
import Image24 from "./image 24.svg";
import Keep from "./keep.svg";
import Take from "./take.svg";
import {actionRepresentativeTileGlobal} from "../../index";

export const FolderActionDetail0: Folder = {
    representativeTile: {
        ...actionRepresentativeTileGlobal,
        key: actionRepresentativeTileGlobal.key + "_0"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: { value: Have },
            },
            wordToDisplay: "have",
            wordToSpeak: "have"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Get },
            },
            wordToDisplay: "get",
            wordToSpeak: "get"
        },

        {
            assetRecord: {
                type: "svg",
                asset: { value: Image23 },
            },
            wordToDisplay: "give",
            wordToSpeak: "give"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Image24 },
            },
            wordToDisplay: "put",
            wordToSpeak: "put"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Take },
            },
            wordToDisplay: "take",
            wordToSpeak: "take"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Keep },
            },
            wordToDisplay: "keep",
            wordToSpeak: "keep"
        },
    ]
};
