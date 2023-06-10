import ques1 from "./Group-1.png";
import ques2 from "./Group-2.png";
import ques3 from "./places1.png";
import ques4 from "./Group-4.png";
import ques5 from "./Group-3.png";
import ques6 from "./Group.png";
import {Assets, Folder} from "../../../@types/image";
import Icon from"./questiontitle.svg";

export const FolderMainQuestion: Folder = {
    representativeTile: {
        assetRecord: {
            type: "svg",
            asset: { value: Icon },
        },
        wordToDisplay: "Question",
        wordToSpeak: "Question",
        bg:"#EBEBEB",
        color:"#5F5C5C",
        key: "question"
    },
    staticTiles: [
        {
            assetRecord: {
                type: "png",
                asset: { value: ques1 },
            },
            wordToDisplay: "who",
            wordToSpeak: "who"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: ques2 },
            },
            wordToDisplay: "what",
            wordToSpeak: "what"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: ques3 },
            },
            wordToDisplay: "where",
            wordToSpeak: "where"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: ques4 },
            },
            wordToDisplay: "when",
            wordToSpeak: "when"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: ques5 },
            },
            wordToDisplay: "how",
            wordToSpeak: "how"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: ques6 },
            },
            wordToDisplay: "why",
            wordToSpeak: "why"
        },
    ]
};
