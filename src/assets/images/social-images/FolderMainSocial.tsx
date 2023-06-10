import social1 from "./hi1.png";
import social2 from "./thankyou1.png";
import social3 from "./thankyou2.png";
import social4 from "./wait-21.png";
import social5 from "./yes1.png";
import social6 from "./no-11.png";
import {Assets, Folder} from "../../../@types/image";
import {socialRepresentativeTileGlobal} from "./index";

export const FolderMainSocial: Folder = {
    representativeTile: socialRepresentativeTileGlobal,

    staticTiles: [
        {
            assetRecord: {
                type: "png",
                asset: { value: social1 },
            },
            wordToDisplay: "hi, hello",
            wordToSpeak: "hi"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: social2 },
            },
            wordToDisplay: "thank you",
            wordToSpeak: "thank you"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: social3 },
            },
            wordToDisplay: "please",
            wordToSpeak: "please"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: social4 },
            },
            wordToDisplay: "wait",
            wordToSpeak: "wait"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: social5 },
            },
            wordToDisplay: "yes",
            wordToSpeak: "yes"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: social6 },
            },
            wordToDisplay: "no",
            wordToSpeak: "no"
        },
    ]
};

