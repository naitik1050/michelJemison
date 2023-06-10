import {Folder} from "../../../../../@types/image";
import From from "./from_17757 1.svg"
import Here from "./here_16825 1.svg"
import There from "./there_16818 1.svg"
import AtSymbol from "./atSymbol.svg"
import With from "./With_47556 1.svg"
import Without from "./Without.svg"
import {locationRepresentativeTileGlobal} from "../../index";
export const FolderLocationDetail2: Folder = {
    representativeTile: {
        ...locationRepresentativeTileGlobal,
        key: locationRepresentativeTileGlobal.key + "_2"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: { value: From },
            },
            wordToDisplay: "from",
            wordToSpeak: "from"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: AtSymbol },
            },
            wordToDisplay: "at",
            wordToSpeak: "at"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Here },
            },
            wordToDisplay: "here",
            wordToSpeak: "here"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: There },
            },
            wordToDisplay: "there",
            wordToSpeak: "there"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: With },
            },
            wordToDisplay: "with",
            wordToSpeak: "with"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Without },
            },
            wordToDisplay: "without",
            wordToSpeak: "without"
        },

    ]
};
