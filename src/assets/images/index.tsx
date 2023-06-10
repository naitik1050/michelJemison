import {Folder} from "../../@types/image";
import {FolderDescriptorDetailList} from "./descriptors-images/detail";
import {FolderActionDetailList} from "./action-images/detail";
import {FolderLocationDetailList} from "./locations-images/detail";
import {FolderSocialDetailList} from "./social-images/detail";

export {FolderMainPronoun} from "./pronouns-image/FolderMainPronoun"
export {FolderMainSocial} from "./social-images/FolderMainSocial"
export {FolderMainAction} from "./action-images/FolderMainAction"
export {FolderMainDescriptor} from "./descriptors-images/FolderMainDescriptor"
export {FolderMainLocation} from "./locations-images/FolderMainLocation"
export {FolderMainQuestion} from "./questions-images/FolderMainQuestion"

export const getFolderDetailsByRepresentativeTileKey = (key: string): Folder[] => {
    if (key === 'descriptor') return FolderDescriptorDetailList;
    if (key === 'action') return FolderActionDetailList;
    if (key === 'social') return FolderSocialDetailList;
    if (key === 'location') return FolderLocationDetailList;

    return [];
};
