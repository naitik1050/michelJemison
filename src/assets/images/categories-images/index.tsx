import {FolderEntreesCategory} from "./entrees/FolderEntreesCategory"
import {FolderFeelingsCategory} from "./feelings/FolderFeelingsCategory";
import {FolderFruitsCategory} from "./fruit/FolderFruitsCategory";
import {FolderTimeCategory} from "./time/FolderTimeCategory";
import {FolderSelfCareCategory} from "./self-care/FolderSelfCareCategory";
import {FolderBodyCategory} from "./body/FolderBodyCategory";
import {Folder} from "../../../@types/image";
import {StaticTile} from "../../../@types/model_";

export const FolderCategoryList = [
    FolderFeelingsCategory,
    FolderFruitsCategory,
    FolderEntreesCategory,
    FolderTimeCategory,
    FolderSelfCareCategory,
    FolderBodyCategory
];

export const getFolderRepresentativeTiles = ():StaticTile[] => FolderCategoryList.map(folder => folder.representativeTile);
export const getFolderRepresentativeTilesByWordToDisplay = (wordToDisplay: string):Folder | undefined => FolderCategoryList.find(category => category.representativeTile.wordToDisplay === wordToDisplay);

