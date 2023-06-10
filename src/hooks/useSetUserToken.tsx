import {useAppDispatch} from "../@types/redux_component.d";
import * as SecureStore from 'expo-secure-store';
import {setSignIn} from "../redux/api/authSlice";


export default ():{ handleSetUserToken: (token: any,refreshToken:any) => Promise<void> } => {
    const dispatch = useAppDispatch();

    const handleSetUserToken = async (token:any,refreshToken:any) => {
        if(token) {
            await SecureStore.setItemAsync("userToken", token);
            await SecureStore.setItemAsync("refreshToken", refreshToken);
            dispatch(setSignIn({token,refreshToken}));
        }
    };


    return {handleSetUserToken};
}