import {Folder} from "../../../../../@types/image";
import Image43 from "./image 43.svg";
import Inside from "./inside 1.svg";
import Off from "./off.svg";
import On from "./on.svg";
import {locationRepresentativeTileGlobal} from "../../index";

export const FolderLocationDetail5: Folder = {
    representativeTile: {
        ...locationRepresentativeTileGlobal,
        key: locationRepresentativeTileGlobal.key + "_5"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: { value: On },
            },
            wordToDisplay: "on",
            wordToSpeak: "on"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Off },
            },
            wordToDisplay: "off",
            wordToSpeak: "off"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Inside },
            },
            wordToDisplay: "in",
            wordToSpeak: "in"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Image43 },
            },
            wordToDisplay: "out",
            wordToSpeak: "out"
        },
    ]
};
