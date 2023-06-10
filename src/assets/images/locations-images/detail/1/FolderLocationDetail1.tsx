import {Folder} from "../../../../../@types/image";
import Behind from "./behind_16883 1.svg";
import Middle from "./middle_16888 1.svg";
import Front from "./in front_16878 1.svg";
import {locationRepresentativeTileGlobal} from "../../index";

export const FolderLocationDetail1: Folder = {
    representativeTile: {
        ...locationRepresentativeTileGlobal,
        key: locationRepresentativeTileGlobal.key + "_1"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: {value: Front},
            },
            wordToDisplay: "front",
            wordToSpeak: "front"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Middle},
            },
            wordToDisplay: "middle",
            wordToSpeak: "middle"
        },

        {
            assetRecord: {
                type: "svg",
                asset: {value: Behind},
            },
            wordToDisplay: "behind",
            wordToSpeak: "behind"
        },
    ]
};
