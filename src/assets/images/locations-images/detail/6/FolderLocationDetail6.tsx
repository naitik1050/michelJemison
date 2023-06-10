import {Folder} from "../../../../../@types/image";
import Emotion from "../../../categories-images/feelings/emotion.svg";
import Down from "./Down_4059 1.svg";
import Up from "./Up_6074 1.svg";
import {locationRepresentativeTileGlobal} from "../../index";

export const FolderLocationDetail6: Folder = {
    representativeTile: {
        ...locationRepresentativeTileGlobal,
        key: locationRepresentativeTileGlobal.key + "_6"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: {value: Down},
            },
            wordToDisplay: "down",
            wordToSpeak: "down"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Up},
            },
            wordToDisplay: "up",
            wordToSpeak: "up"
        },
    ]
};
