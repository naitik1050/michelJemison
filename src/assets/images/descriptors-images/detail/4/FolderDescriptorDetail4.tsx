import {Folder} from "../../../../../@types/image";
import Image37 from "./image 37.svg";
import Image38 from "./image 38.svg";
import Image36 from "./image 36.svg";
import Image35 from "./image 35.svg";
import Image34 from "./image 34.svg";
import {descriptorRepresentativeTile} from "../../index";

export const FolderDescriptorDetail4: Folder = {
    representativeTile: {
        ...descriptorRepresentativeTile,
        key: descriptorRepresentativeTile.key + "_4"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: {value: Image34},
            },
            wordToDisplay: "good",
            wordToSpeak: "good"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Image35},
            },
            wordToDisplay: "bad",
            wordToSpeak: "bad"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Image36},
            },
            wordToDisplay: "right",
            wordToSpeak: "right"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Image37},
            },
            wordToDisplay: "wrong",
            wordToSpeak: "wrong"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Image38},
            },
            wordToDisplay: "ready",
            wordToSpeak: "ready"
        },
    ]
};
