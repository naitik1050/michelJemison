import {Folder} from "../../../../../@types/image";
import BigLarge from "./image 29.svg";
import Medium from "./image 30.svg";
import SmallLittle from "./image 31.svg";
import {descriptorRepresentativeTile} from "../../index";

export const FolderDescriptorDetail0: Folder = {
    representativeTile:{
        ...descriptorRepresentativeTile,
        key: descriptorRepresentativeTile.key +"_0"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: { value: BigLarge},
            },
            wordToDisplay: "big, large",
            wordToSpeak: "big"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Medium},
            },
            wordToDisplay: "medium",
            wordToSpeak: "medium"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: SmallLittle},
            },
            wordToDisplay: "next",
            wordToSpeak: "next"
        },
    ]
};
