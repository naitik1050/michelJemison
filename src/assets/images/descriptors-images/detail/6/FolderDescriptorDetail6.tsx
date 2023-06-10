import {Folder} from "../../../../../@types/image";
import Dry from "./dry 1.svg";
import Image39 from "./image 39.svg";
import Image40 from "./image 40.svg";
import Image41 from "./image 41.svg";
import Image42 from "./image 42.svg";
import Wet from "./wet 1.svg";
import {descriptorRepresentativeTile} from "../../index";

export const FolderDescriptorDetail6: Folder = {
    representativeTile:{
        ...descriptorRepresentativeTile,
        key: descriptorRepresentativeTile.key +"_6"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: { value: Wet },
            },
            wordToDisplay: "wet",
            wordToSpeak: "wet"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Dry },
            },
            wordToDisplay: "dry",
            wordToSpeak: "dry"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Image39 },
            },
            wordToDisplay: "hard",
            wordToSpeak: "hard"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Image40 },
            },
            wordToDisplay: "soft",
            wordToSpeak: "soft"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Image41 },
            },
            wordToDisplay: "rough",
            wordToSpeak: "rough"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Image42 },
            },
            wordToDisplay: "smooth",
            wordToSpeak: "smooth"
        },

    ]
};
