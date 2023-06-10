import {useAppDispatch} from "../@types/redux_component.d";
import * as SecureStore from 'expo-secure-store';
import {setSignOut} from "../redux/api/authSlice";
import {useRegisterUserMutation} from "../redux/api/authApiSlice";
import {useDeleteUserMutation} from "../redux/api/userApiSlice";
import {apiSlice} from "../redux/apiSlice";
import {useEffect} from "react";
import WavingHand from "../assets/images/rn-svg/WavingHand";
import SadPaper from "../assets/images/rn-svg/SadPaper";
import {useToastController} from "@tamagui/toast";

export default (): { handle: (values: any) => Promise<void>,isSuccess:boolean,isLoading:boolean } => {
    const [
        mutation,{isSuccess,isLoading,isError,error}
    ] = useDeleteUserMutation();
    const toast = useToastController();
    const dispatch = useAppDispatch();
    const handle = async (values:any) => {
        await mutation(values);
    }
    useEffect(() => {
        if (isSuccess) {
            (async function handleSignOut() {
                await dispatch(setSignOut());
                await SecureStore.deleteItemAsync("userToken");
                await dispatch(apiSlice.util.resetApiState());
            })();
        }
    }, [isSuccess]);

    useEffect(()=>{
        if(isError){
            // const message = (registerError as any).data.message
            console.log(error,"ERROR");
            toast.show('Something went wrong with deletion of your account, please check email and password.', {
                message: "If the issue persist contact 631-664-3026.",
                duration: 7500,
                themeCustom: "error",
                icon: SadPaper
            });
        }
    },[isError]);

    return {handle,isSuccess,isLoading};
}