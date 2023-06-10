import {useAppDispatch} from "../@types/redux_component.d";
import * as SecureStore from 'expo-secure-store';
import {setSignOut} from "../redux/api/authSlice";
import {apiSlice} from "../redux/apiSlice";

export default (): { handleLogout: () => Promise<void> } => {

    const dispatch = useAppDispatch();
    const handleLogout = async () => {
        await SecureStore.deleteItemAsync("userToken");
        dispatch(setSignOut());
        dispatch(apiSlice.util.resetApiState());
    }
    //uncomment this and use it if you want to logout for now immediately
    // useEffect(() => {
    //     (async () => {
    //         handleLogout();
    //     })()
    // }, [])

    return {handleLogout};
}