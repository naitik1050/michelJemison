import React from "react";
import {Tile} from "../../../@types/model_";
import {TileCompositeProps} from "./TileComposite";

interface TileContextType extends TileCompositeProps {
}

export const TileContext = React.createContext<TileContextType>({} as TileContextType);

export const useTileContext = (): TileContextType => {
    const context = React.useContext(TileContext);
    if (!context) {
        throw new Error("useSurfaceTileContext must be used within a SentenceProvider");
    }
    return context;
};

