import {Folder} from "../../../../../@types/image";
import {socialRepresentativeTileGlobal} from "../../index";

export const FolderSocialDetail3: Folder = {
    representativeTile: {
        ...socialRepresentativeTileGlobal,
        key:socialRepresentativeTileGlobal.key+"_3"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "text",
                asset: { value: " 😔🙏" },
            },
            wordToDisplay: "I’m fine",
            wordToSpeak: "I’m fine"
        },
        {
            assetRecord: {
                type: "text",
                asset: { value: "🙇‍" },
            },
            wordToDisplay: "Pardon me",
            wordToSpeak: "Pardon me"
        },
    ]
};
