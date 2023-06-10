import {Assets, Folder} from "../../../@types/image";
import pronouns1 from "./imemy1.png";
import pronouns2 from "./you1.png";
import pronouns3 from "./we1.png";
import pronouns4 from "./this1.png";
import pronouns5 from "./she1.png";
import pronouns6 from "./he1.png";
import Icon from "./pronountitle.svg";

export const FolderMainPronoun: Folder = {
    representativeTile: {
        assetRecord: {
            type: "svg",
            asset: {value: Icon},
        },
        wordToDisplay: "Pronoun",
        wordToSpeak: "Pronoun",
        bg:"#F8DDDD",
        color:"#CC4A4A",
        key:"pronoun"

    },
    staticTiles: [
        {
            assetRecord: {
                type: "png",
                asset: {value: pronouns1},
            },
            wordToDisplay: "I, me, my",
            wordToSpeak: "i"
        },
        {
            assetRecord: {
                type: "png",
                asset: {value: pronouns2},
            },
            wordToDisplay: "you",
            wordToSpeak: "you"
        },
        {
            assetRecord: {
                type: "png",
                asset: {value: pronouns3},
            },
            wordToDisplay: "we",
            wordToSpeak: "we"
        },
        {
            assetRecord: {
                type: "png",
                asset: {value: pronouns4},
            },
            wordToDisplay: "this, that",
            wordToSpeak: "this"
        },
        {
            assetRecord: {
                type: "png",
                asset: {value: pronouns5},
            },
            wordToDisplay: "she",
            wordToSpeak: "she"
        },
        {
            assetRecord: {
                type: "png",
                asset: {value: pronouns6},
            },
            wordToDisplay: "he",
            wordToSpeak: "he"
        },
    ]
};


