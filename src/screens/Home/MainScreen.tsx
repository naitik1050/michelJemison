import React, {useEffect, useRef, useState} from "react";
import {TilesProvider} from "../../components/aac_tile/tiles";
import {FolderProvider} from "../../components/aac_tile/folder/FolderProvider";
import {SelectedFolderOrMainScreen} from "../../components/aac_tile/folder/SelectedFolderOrMainScreen";

const MainScreen = () => {
    // const {handleLogout} = useLogout();
    // useEffect(handleLogout);
    return (
            <TilesProvider>
                <FolderProvider>
                    <SelectedFolderOrMainScreen/>
                </FolderProvider>
            </TilesProvider>
    );
};

export default MainScreen;
