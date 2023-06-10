import React from "react";
import {TileContext} from "./TileContext";
import {TileCompositeProps} from "./TileComposite";
import {useTilesContext} from "../tiles";
import TileHelper from "../../../utils/TileHelper";

interface TileProviderProps extends TileCompositeProps {
    children: React.ReactNode;
}

export const TileProvider: React.FC<TileProviderProps> = ({
                                                              children,
                                                              ...contextProps
                                                          }) => {
    return (
        <TileContext.Provider value={contextProps}>
            {children}
        </TileContext.Provider>
    );
};


// const {includesHiddenTile} = useHideTilesContext();
// const screenName = useRouteUppercase();
// const coordinates = TileHelper.generateCoordinates(gridRow, gridColumn);
// const tileCustom = useTileCustom(coordinates,screenName);


// const tile = tileCustom ? { ...tileCustom, hidden: includesHiddenTile(coordinates) } : {
// co   nst tile = {
//     gridColumn,
//     gridRow,
//     wordToDisplay,
//     wordToSpeak: wordToDisplay,
//     coordinates,
//     image,
//     // gridTitleEnum: screenName,
//     hidden: includesHiddenTile(coordinates),
// };
