import {useAppDispatch} from "../../../../@types/redux_component.d";
import {useNavigation} from "@react-navigation/native";
import {AppCoreScreenNavigationProp} from "../../../../@types/navigation";
import {CustomWordDTO} from "../../../../@types/model_";
import {addCustomWord} from "../../../../redux/app/customizeWordSlice";


export const useEditTile = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigation<any>();
    // const navigate = useNavigation<AppCoreScreenNavigationProp>();

    const editTile = async (customWord: CustomWordDTO) => {
        await dispatch(addCustomWord(customWord));
        await navigate.navigate('CustomizeWord');
    };

    return { editTile };
};
