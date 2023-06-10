import {useCallback} from 'react';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {TabNavigatorParamEnum} from '../@types/navigation';
import {gridSize, setGridSize} from '../redux/app/gridSizeSlice';
import {Folder} from "../@types/image";
import {StaticTile} from "../@types/model_";

export const useGridSizeAndPlaceStaticTiles = (list: StaticTile[], categoryTitle: string) => {

    //TODO dynamically change grid based on user categorytitle
    let column = 0;
    let row = 0;
    if (categoryTitle == "categories") {
        column = 6;
        row = 4;
    } else if (categoryTitle == "mainShort") {
        column = 2;
        row = 3;
    } else if (categoryTitle == "mainLong") {
        column = 2;
        row = 7;
    }
    // const { column, row } = useSelector(gridSize);
    // const route = useRoute();
    // const screenName = route.name as TabNavigatorParamEnum;
    const dispatch = useDispatch();

    const handleSetGridSize = useCallback(
        () => {
            // dispatch(setGridSize(screenName));
        },
        [dispatch],
    );

    useFocusEffect(useCallback(() => {
        handleSetGridSize();
    }, [handleSetGridSize]));

    const interestsMatrix = Array.from({length: row}, (_, idx) => {
        const start = idx * column;
        return [
            ...list.slice(start, start + column),
            ...new Array(column - list.slice(start, start + column).length).fill(undefined)
        ];
    });

    return {grid: interestsMatrix};
};
