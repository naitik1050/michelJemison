import {Folder} from "../../../../../@types/image";
import Around from "./around_16819 1.svg";
import Through from "./through.svg";
import Against from "./against.svg";
import Top1 from "./Top-1.svg";
import Top from "./Top.svg";
import {locationRepresentativeTileGlobal} from "../../index";

export const FolderLocationDetail3: Folder = {
    representativeTile: {
        ...locationRepresentativeTileGlobal,
        key: locationRepresentativeTileGlobal.key + "_3"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: { value: Top1 },
            },
            wordToDisplay: "top",
            wordToSpeak: "top"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Top },
            },
            wordToDisplay: "bottom",
            wordToSpeak: "bottom"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Against },
            },
            wordToDisplay: "against",
            wordToSpeak: "against"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Through },
            },
            wordToDisplay: "through",
            wordToSpeak: "through"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Around },
            },
            wordToDisplay: "around",
            wordToSpeak: "around"
        },
    ]
};
