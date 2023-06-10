import des1 from "./good-21.png";
import des2 from "./Vector.png";
import des3 from "./different1.png";
import des4 from "./now1.png";
import des5 from "./not-21.png";
import des6 from "./finished-21.png";
import {Assets, Folder} from "../../../@types/image";
import {descriptorRepresentativeTile} from "./index";

export const FolderMainDescriptor: Folder = {
    representativeTile: descriptorRepresentativeTile,
    staticTiles: [
        {
            assetRecord: {
                type: "png",
                asset: { value: des1 },
            },
            wordToDisplay: "good",
            wordToSpeak: "good"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: des2 },
            },
            wordToDisplay: "more",
            wordToSpeak: "more"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: des3 },
            },
            wordToDisplay: "other",
            wordToSpeak: "other"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: des4 },
            },
            wordToDisplay: "Now",
            wordToSpeak: "Now"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: des5 },
            },
            wordToDisplay: "not",
            wordToSpeak: "not"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: des6 },
            },
            wordToDisplay: "finished",
            wordToSpeak: "finished"
        },
    ]
};
