import {Folder} from "../../../../../@types/image";
import WakeUp from "./wake-up 1.svg";
import Image21 from "./image 21.svg";
import Sleep from "./sleep 1.svg";
import Rest from "./rest 1.svg";
import Stand from "./stand 1.svg";
import Sit from "./sit 1.svg";
import {actionRepresentativeTileGlobal} from "../../index";

export const FolderActionDetail2: Folder = {
    representativeTile: {
        ...actionRepresentativeTileGlobal,
        key: actionRepresentativeTileGlobal.key + "_2"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: { value: Sit },
            },
            wordToDisplay: "sit",
            wordToSpeak: "sit"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Stand },
            },
            wordToDisplay: "stand",
            wordToSpeak: "stand"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Sleep },
            },
            wordToDisplay: "sleep",
            wordToSpeak: "sleep"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: WakeUp },
            },
            wordToDisplay: "wake up",
            wordToSpeak: "wake up"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Rest },
            },
            wordToDisplay: "rest",
            wordToSpeak: "rest"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Image21 },
            },
            wordToDisplay: "work",
            wordToSpeak: "work"
        },
    ]
};
