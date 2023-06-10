import {Folder} from "../../../../../@types/image";
import Ask from "./ask 1.svg";
import Draw from "./draw 1.svg";
import Image22 from "./image 22.svg";
import Read from "./read 1.svg";
import Tell from "./tell 1.svg";
import Write from "./write 1.svg";
import {actionRepresentativeTileGlobal} from "../../index";

export const FolderActionDetail1: Folder = {
    representativeTile: {
        ...actionRepresentativeTileGlobal,
        key: actionRepresentativeTileGlobal.key + "_1"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: { value: Tell },
            },
            wordToDisplay: "say",
            wordToSpeak: "say"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Ask },
            },
            wordToDisplay: "ask",
            wordToSpeak: "ask"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Read },
            },
            wordToDisplay: "read",
            wordToSpeak: "read"
        },

        {
            assetRecord: {
                type: "svg",
                asset: { value: Write },
            },
            wordToDisplay: "write",
            wordToSpeak: "write"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Draw },
            },
            wordToDisplay: "draw",
            wordToSpeak: "draw"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Image22 },
            },
            wordToDisplay: "show",
            wordToSpeak: "show"
        },

    ]
};
