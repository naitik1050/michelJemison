import React from "react";
import {RepresentativeTile, StaticTile} from "./model_";

type AssetType = "png" | "svg" | "sound" | "url" | "text";

type URL = string;

type Asset<T extends AssetType> = {
    value: T extends "png" | "sound" ? NodeRequire
        : T extends "url" ? URL
            : T extends "text" ? string
                : React.FC<{[key: string]: any}>;
};

type AssetRecord = {
    type: AssetType;
    asset: Asset<AssetType>;
};

type Assets = { [name: string]: AssetRecord };

type Folder = {
    representativeTile: RepresentativeTile;
    staticTiles: StaticTile[];
}
