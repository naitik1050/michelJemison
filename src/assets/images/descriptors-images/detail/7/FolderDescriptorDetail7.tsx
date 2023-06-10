import {Folder} from "../../../../../@types/image";
import ColorPalette from "./color-palette 1.svg";
import Weather from "./weather 1.svg";
import Feelings from "./feelings 1.svg";
import {descriptorRepresentativeTile} from "../../index";

export const FolderDescriptorDetail7: Folder = {
    representativeTile: {
        ...descriptorRepresentativeTile,
        key: descriptorRepresentativeTile.key + "_7"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: {value: ColorPalette},
            },
            wordToDisplay: "color-palette",
            wordToSpeak: "color palette"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Weather},
            },
            wordToDisplay: "weather",
            wordToSpeak: "weather"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Feelings},
            },
            wordToDisplay: "feelings",
            wordToSpeak: "feelings"
        },
    ]
};
