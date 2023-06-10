import React, {useState, useEffect} from "react";
import {FolderContext} from "./FolderContext";
import { Folder} from "../../../@types/image";
import {FolderMainAction} from "../../../assets/images";

interface FolderProviderProps {
    children: React.ReactNode;
}

export const FolderProvider: React.FC<FolderProviderProps> = ({children}) => {
    const [isFolderSelected, setIsFolderSelected] = useState<boolean>(false);
    const [isFolderDetailSelected, setIsFolderDetailSelected] = useState<boolean>(false);
    const [folderSelected, setFolderSelected] = useState<Folder>(FolderMainAction); //initial value
    const handleFolder = (folder: Folder) => {
        setIsFolderSelected(true);
        setFolderSelected(folder);
    };
    const handleFolderDetail = (folder:Folder) => {
        setIsFolderDetailSelected(true);
        setFolderSelected(folder);
    }

    const goBackFromFolder = () => {
        setIsFolderDetailSelected(false);
        setIsFolderSelected(false);
    }

    return (
        <FolderContext.Provider
            value={{
                isFolderSelected,
                isFolderDetailSelected,
                goBackFromFolder,
                handleFolderDetail,
                folderSelected,
                handleFolder
            }}
        >
            {children}
        </FolderContext.Provider>
    );
};
