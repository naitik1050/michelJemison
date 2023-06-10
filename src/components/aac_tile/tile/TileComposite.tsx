import {TileProvider} from "./TileProvider";
import React from "react";
import {Tile} from "../../../@types/model_";
import {TileFactory} from "./factory/TileFactory";


export interface TileCompositeProps {
    tile: Tile;
    fn?: () => void;
}



export const TileComposite = (props: TileCompositeProps) => {
    return (
        <TileProvider
            {...props}
        >
            <TileFactory tile={props.tile}/>
        </TileProvider>
    );
}