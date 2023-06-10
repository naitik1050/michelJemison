import {Folder} from "../../../../../@types/image";
import Stay from "./stay.svg";
import Image27 from "./image 27.svg";
import Image26 from "./image 26.svg";
import Image25 from "./image 25.svg";
import Think from "./think.svg";
import Know from "./know.svg";
import {actionRepresentativeTileGlobal} from "../../index";

export const FolderActionDetail3: Folder = {
    representativeTile: {
        ...actionRepresentativeTileGlobal,
        key: actionRepresentativeTileGlobal.key + "_3"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: { value: Think },
            },
            wordToDisplay: "think",
            wordToSpeak: "think"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Know },
            },
            wordToDisplay: "know,understand",
            wordToSpeak: "know"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Image25 },
            },
            wordToDisplay: "come",
            wordToSpeak: "come"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Image26 },
            },
            wordToDisplay: "move",
            wordToSpeak: "move"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Stay },
            },
            wordToDisplay: "stay",
            wordToSpeak: "stay"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Image27 },
            },
            wordToDisplay: "leave",
            wordToSpeak: "leave"
        },
    ]
};
