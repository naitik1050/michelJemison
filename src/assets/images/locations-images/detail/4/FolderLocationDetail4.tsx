import {Folder} from "../../../../../@types/image";
import Right from "./Right_5515 1.svg";
import Left from "./Left_4927 1.svg";
import {locationRepresentativeTileGlobal} from "../../index";

export const FolderLocationDetail4: Folder = {
    representativeTile: {
        ...locationRepresentativeTileGlobal,
        key: locationRepresentativeTileGlobal.key + "_4"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: { value: Left },
            },
            wordToDisplay: "left",
            wordToSpeak: "left"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Right },
            },
            wordToDisplay: "right",
            wordToSpeak: "right"
        },


    ]
};
