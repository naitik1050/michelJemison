import {TabNavigatorParams} from "./navigation";
import {AssetRecord, Assets} from "./image";
import {ImageSourcePropType} from "react-native";

// interface Tile {
//     gridRow: number;
//     gridColumn: number;
//     // gridTitleEnum: GridTitleEnum;
//     wordToDisplay: string;
//     wordToSpeak?: string;
//     imagePath?: string;
//     image?:ImageSourcePropType;
//     coordinates: string;
//     hidden:boolean;
// }

interface Tile {
    wordToDisplay: string;
    wordToSpeak: string;
    imagePath?: string;
    assetRecord: AssetRecord;
    bg: string;
    color: string;
    gridRow: number;
    gridColumn: number;
    gridTitleEnum: string;
    coordinates: string;
    isBlank?: boolean;
}

type PartialTile = Partial<Tile>;

type StaticTile = PartialTile & Required<Pick<Tile, 'wordToDisplay' | 'wordToSpeak' | 'assetRecord'>>;

type RepresentativeTile = StaticTile & Required<Pick<Tile, 'bg' | 'color'>> & {
    key:string;
};

type CustomTile = Omit<Tile, 'assetRecord'> & { imagePath?: string };


interface Grid {
    row: number;
    column: number;
    title: string;
}

type CustomWordDTO = {
    wordToDisplay: string;
    wordToSpeak: string;
    gridColumn: number;
    gridRow: number;
    imagePath?: string;
    gridTitleEnum: string;
}
type TileImagePartial = Partial<CustomWordDTO> & {
    image: File;
    [key: string]: any;
};

type GridTitleEnum = Uppercase<keyof TabNavigatorParams>;

