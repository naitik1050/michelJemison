import action1 from "./Group.png";
import action2 from "./Group-2.png";
import action3 from "./like3.png";
import action4 from "./Group-3.png";
import action5 from "./lego1.png";
import action6 from "./Group-1.png";
import action7 from "./gift1.png";
import action8 from "./play1.png";
import action9 from "./eating1.png";
import action10 from "./drink-water3.png";
import action11 from "./stop1.png";
import action12 from "./listen1.png";
import action13 from "./close1.png";
import action14 from "./finish1.png";

import {Folder} from "../../../@types/image";
import {actionRepresentativeTileGlobal} from "./index";

export const FolderMainAction: Folder = {
    representativeTile: actionRepresentativeTileGlobal,
    staticTiles: [
        {
            assetRecord: {
                type: "png",
                asset: { value: action1 },
            },
            wordToDisplay: "want",
            wordToSpeak: "want"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: action2 },
            },
            wordToDisplay: "go",
            wordToSpeak: "go"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: action3 },
            },
            wordToDisplay: "like",
            wordToSpeak: "like"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: action4 },
            },
            wordToDisplay: "look",
            wordToSpeak: "look"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: action5 },
            },
            wordToDisplay: "make",
            wordToSpeak: "make"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: action6 },
            },
            wordToDisplay: "put",
            wordToSpeak: "put"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: action7 },
            },
            wordToDisplay: "give",
            wordToSpeak: "give"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: action8 },
            },
            wordToDisplay: "play",
            wordToSpeak: "play"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: action9 },
            },
            wordToDisplay: "eat",
            wordToSpeak: "eat"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: action10 },
            },
            wordToDisplay: "drink",
            wordToSpeak: "drink"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: action11 },
            },
            wordToDisplay: "stop",
            wordToSpeak: "stop"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: action12 },
            },
            wordToDisplay: "listen",
            wordToSpeak: "listen"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: action13 },
            },
            wordToDisplay: "close",
            wordToSpeak: "close"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: action14 },
            },
            wordToDisplay: "finished",
            wordToSpeak: "finished"
        },
    ]
};

