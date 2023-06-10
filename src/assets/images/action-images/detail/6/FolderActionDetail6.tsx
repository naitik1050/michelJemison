import {Folder} from "../../../../../@types/image";
import Jump from "./jump (1) 1.svg";
import Walk from "./walk 1.svg";
import Run from "./run 1.svg";
import {actionRepresentativeTileGlobal} from "../../index";

export const FolderActionDetail6: Folder = {
    representativeTile: {
        ...actionRepresentativeTileGlobal,
        key: actionRepresentativeTileGlobal.key + "_6"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: { value: Walk },
            },
            wordToDisplay: "walk",
            wordToSpeak: "walk"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Run },
            },
            wordToDisplay: "run",
            wordToSpeak: "run"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Jump },
            },
            wordToDisplay: "jump",
            wordToSpeak: "jump"
        },
    ]
};
