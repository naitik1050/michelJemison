import {Folder} from "../../../../../@types/image";
import Ugly from "./ugly.svg";
import Pretty from "./pretty.svg";
import Fun from "./fun 1.svg";
import Bored from "./bored 1.svg";
import Dirty from "./dirty 1.svg";
import Clean from "./clean 1.svg";
import Case2 from "./case-2.svg";
import Case1 from "./case-1.svg";
import Case from "./case.svg";
import {descriptorRepresentativeTile} from "../../index";

export const FolderDescriptorDetail3: Folder = {
    representativeTile: {
        ...descriptorRepresentativeTile,
        key: descriptorRepresentativeTile.key + "_3"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: {value: Ugly},
            },
            wordToDisplay: "ugly",
            wordToSpeak: "ugly"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Pretty},
            },
            wordToDisplay: "pretty",
            wordToSpeak: "pretty"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Fun},
            },
            wordToDisplay: "fun",
            wordToSpeak: "fun"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Bored},
            },
            wordToDisplay: "bored",
            wordToSpeak: "bored"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Dirty},
            },
            wordToDisplay: "dirty",
            wordToSpeak: "dirty"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Clean},
            },
            wordToDisplay: "clean",
            wordToSpeak: "clean"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Case2},
            },
            wordToDisplay: "case2",
            wordToSpeak: "case two"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Case1},
            },
            wordToDisplay: "case1",
            wordToSpeak: "case one"
        },
        {
            assetRecord: {
                type: "svg",
                asset: {value: Case},
            },
            wordToDisplay: "case",
            wordToSpeak: "case"
        },
    ]
};
