import {useLoginUserMutation} from "../redux/api/authApiSlice";
import useSetUserToken from "./useSetUserToken";
import {useEffect} from "react";
import {useToastController} from "@tamagui/toast";
import WavingHand from "../assets/images/rn-svg/WavingHand";
import SadPaper from "../assets/images/rn-svg/SadPaper";

export default ():{ isLoading: boolean; handleLogin: (values: any) => Promise<void> } => {
    const toast = useToastController();
    const {handleSetUserToken} = useSetUserToken();
    const [
        loginUser,
        { isSuccess, isError, error, isLoading },
    ] = useLoginUserMutation();

    const handleLogin = async (values:any) => {
        const data = await loginUser(values).unwrap();
        const token = data.token;
        const refreshToken = data.refreshToken;

        await handleSetUserToken(token,refreshToken);

    };


    useEffect(()=>{
        if(isSuccess) {
            toast.show('Welcome back', {
                // message: "",
                themeCustom: "success",
                duration: 6500,
                icon: WavingHand
            });
        }
    },[isSuccess])

    useEffect(()=>{
        if(isError){
            // const message = (registerError as any).data.message
            console.log(error,"ERROR");
            toast.show('Wrong Email Or Password.', {
                message: "If the issue persist contact 631-664-3026.",
                duration: 7500,
                themeCustom: "error",
                icon: SadPaper
            });
        }
    },[isError]);


    return {handleLogin,isLoading};
}
