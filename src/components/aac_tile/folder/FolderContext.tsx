import React from "react";
import {Tile} from "../../../@types/model_";
import {Folder} from "../../../@types/image";

interface FolderContextType {
    isFolderSelected: boolean;
    isFolderDetailSelected: boolean;
    goBackFromFolder(): void;
    folderSelected: Folder;
    handleFolder(folder: Folder): void;
    handleFolderDetail(folder: Folder): void;
}

export const FolderContext = React.createContext<FolderContextType>({} as FolderContextType);

export const useFolderContext = (): FolderContextType => {
    const context = React.useContext(FolderContext);
    if (!context) {
        throw new Error("useCategoryContext must be used within a SentenceProvider");
    }
    return context;
};
