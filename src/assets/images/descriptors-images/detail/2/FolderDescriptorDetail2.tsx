import {Folder} from "../../../../../@types/image";
import different from "./different.png";
import same from "./same.png";
import easy from "./easy.png";
import difficult from "./difficult.png";
import newImg from "./new.png";
import old from "./old.png";
import {descriptorRepresentativeTile} from "../../index";

export const FolderDescriptorDetail2: Folder = {
    representativeTile:{
        ...descriptorRepresentativeTile,
        key: descriptorRepresentativeTile.key +"_2"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "png",
                asset: {value: same},
            },
            wordToDisplay: "same",
            wordToSpeak: "same"
        },
        {
            assetRecord: {
                type: "png",
                asset: {value: different},
            },
            wordToDisplay: "different",
            wordToSpeak: "different"
        },
        {
            assetRecord: {
                type: "png",
                asset: {value: easy},
            },
            wordToDisplay: "easy",
            wordToSpeak: "easy"
        },
        {
            assetRecord: {
                type: "png",
                asset: {value: difficult},
            },
            wordToDisplay: "difficult",
            wordToSpeak: "difficult"
        },
        {
            assetRecord: {
                type: "png",
                asset: {value: newImg},
            },
            wordToDisplay: "new",
            wordToSpeak: "new"
        },
        {
            assetRecord: {
                type: "png",
                asset: {value: old},
            },
            wordToDisplay: "old",
            wordToSpeak: "old"
        },
    ]
};
