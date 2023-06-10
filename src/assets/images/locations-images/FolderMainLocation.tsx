import loc1 from "./Group.png";
import loc2 from "./Layer-1.png";
import loc4 from "./on1.png";
import loc3 from "./Layer.png";
import loc5 from "./With_475561.png";
import loc6 from "./in-21.png";
import { Folder} from "../../../@types/image";
import {locationRepresentativeTileGlobal} from "./index";


export const FolderMainLocation: Folder = {
    representativeTile: locationRepresentativeTileGlobal,
    staticTiles: [
        {
            assetRecord: {
                type: "png",
                asset: { value: loc1 },
            },
            wordToDisplay: "to",
            wordToSpeak: "to"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: loc2 },
            },
            wordToDisplay: "up",
            wordToSpeak: "up"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: loc3 },
            },
            wordToDisplay: "on",
            wordToSpeak: "on"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: loc4 },
            },
            wordToDisplay: "down",
            wordToSpeak: "down"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: loc5 },
            },
            wordToDisplay: "with",
            wordToSpeak: "with"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: loc6 },
            },
            wordToDisplay: "in",
            wordToSpeak: "in"
        },
    ]
};
