import {useEffect} from "react";
import {useRegisterUserMutation} from "../redux/api/authApiSlice";
import useSetUserToken from "./useSetUserToken";
import {useToastController} from "@tamagui/toast";

export default ():{ isLoading: boolean; handleMutation: (values: any) => Promise<void> } => {

    const {handleSetUserToken} = useSetUserToken();
    const toast = useToastController();
    const [
        mutation,
        {
            data,
            isSuccess,
            isError,
            error,
            isLoading
        },
    ] = useRegisterUserMutation();

    const handleMutation = async (values:any) => {
        const data = await mutation(values).unwrap();
        const token = data.token;
        const refreshToken = data.refreshToken;
        await handleSetUserToken(token,refreshToken);
    };

    useEffect(()=>{
        if(isSuccess) {
            toast.show('Welcome', {
                // message: "",
                duration:5000,
                themeCustom: "success"
            });
        }
    },[isSuccess])

    useEffect(()=>{
        if(isError){
            // const message = (registerError as any).data.message
            console.log(error,"ERROR");
            toast.show('Something Went Wrong', {
                message: "If the issue persist contact 631-664-3026.",
                duration: 5000,
                themeCustom: "error"
            });
        }
    },[isError]);
    return {handleMutation,isLoading};
}