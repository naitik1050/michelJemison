import {Folder} from "../../../../../@types/image";
import Emotion from "../../../categories-images/feelings/emotion.svg";
import Snail from "./snail 1.svg";
import Rabbit from "./rabbit 1.svg";
import Image18 from "./18-Muscle.svg";
import Image33 from "./image 33.svg";
import Image32 from "./image 32.svg";
import Group from "./Group.svg";
import Case2 from "./case-2.svg";
import Case1 from "./case-1.svg";
import Case from "./case.svg";
import {descriptorRepresentativeTile} from "../../index";

export const FolderDescriptorDetail1: Folder = {
    representativeTile:{
        ...descriptorRepresentativeTile,
        key: descriptorRepresentativeTile.key +"_1"
    },
    staticTiles: [

        {
            assetRecord: {
                type: "svg",
                asset: { value: Rabbit },
            },
            wordToDisplay: "rabbit",
            wordToSpeak: "rabbit"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Snail },
            },
            wordToDisplay: "snail",
            wordToSpeak: "snail"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Image18 },
            },
            wordToDisplay: "muscle",
            wordToSpeak: "muscle"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Group },
            },
            wordToDisplay: "group",
            wordToSpeak: "group"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Image33 },
            },
            wordToDisplay: "heavy",
            wordToSpeak: "heavy"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Image32 },
            },
            wordToDisplay: "light",
            wordToSpeak: "light"
        },

        {
            assetRecord: {
                type: "svg",
                asset: { value: Case2 },
            },
            wordToDisplay: "case2",
            wordToSpeak: "case two"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Case1 },
            },
            wordToDisplay: "case1",
            wordToSpeak: "case one"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Case },
            },
            wordToDisplay: "case",
            wordToSpeak: "case"
        }
    ]
};
