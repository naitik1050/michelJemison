import {Assets, Folder} from "../../../../@types/image";
import ToiletPaperTissue from "./toilet_paper_tissue.svg";
import Toilet from "./toilet.svg";
import PeeWoman from "./pee_woman.svg";
import Shower from "./shower.png";
import Poop from "./poop.svg";
import Sink from "./sink.svg";
import Soap from "./soap.svg";
import Shampoo from "./shampoo.svg";
import LiquidSoap from "./liquid-soap.svg";
import Toilet1 from "./toilet (1).svg";
import BathBathtub from "./bath_bathtub.png";
import PeeMan from "./pee_man.svg";
import ShampooConditioner from "./shampoo_conditioner.svg";
export const FolderSelfCareCategory: Folder = {
    representativeTile: {
        assetRecord: {
            type:"svg",
            asset: { value: Toilet },
        },
        wordToDisplay: "Self-Care",
        wordToSpeak: "Self-Care",
        bg: "#F6F6F6",
        color: "#5F5C5C",
        key: "self_care"
    },

    staticTiles: [
        {
            assetRecord: {
                type: "svg",
                asset: { value: ToiletPaperTissue },
            },
            wordToDisplay: "toilet paper",
            wordToSpeak: "toilet paper"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Toilet },
            },
            wordToDisplay: "toilet",
            wordToSpeak: "toilet"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: PeeWoman },
            },
            wordToDisplay: "pee",
            wordToSpeak: "pee"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: Shower },
            },
            wordToDisplay: "shower",
            wordToSpeak: "shower"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Poop },
            },
            wordToDisplay: "poop",
            wordToSpeak: "poop"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Sink },
            },
            wordToDisplay: "sink",
            wordToSpeak: "sink"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Soap },
            },
            wordToDisplay: "soap",
            wordToSpeak: "soap"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Shampoo },
            },
            wordToDisplay: "shampoo",
            wordToSpeak: "shampoo"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: LiquidSoap },
            },
            wordToDisplay: "liquid soap",
            wordToSpeak: "liquid soap"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: Toilet1 },
            },
            wordToDisplay: "toilet",
            wordToSpeak: "toilet"
        },
        {
            assetRecord: {
                type: "png",
                asset: { value: BathBathtub },
            },
            wordToDisplay: "bath bathtub",
            wordToSpeak: "bath bathtub"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: PeeMan },
            },
            wordToDisplay: "pee",
            wordToSpeak: "pee"
        },
        {
            assetRecord: {
                type: "svg",
                asset: { value: ShampooConditioner },
            },
            wordToDisplay: "shampoo conditioner",
            wordToSpeak: "shampoo conditioner"
        },
    ],
};
