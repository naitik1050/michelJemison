import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import {useLoginUserMutation} from "../redux/api/authApiSlice";
import {useAppDispatch} from "../@types/redux_component.d";
import * as SecureStore from 'expo-secure-store';
import * as React from "react";
import {setSignIn} from "../redux/api/authSlice";

export default ():boolean => {
    const dispatch = useAppDispatch();
    const [appLoaded, setAppLoaded] = useState(false);


    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let token;
            let refreshToken;

            try {
                token = await SecureStore.getItemAsync('userToken');
                refreshToken = await SecureStore.getItemAsync('refreshToken');

                if(token !== null) dispatch(setSignIn({token,refreshToken}));
            } catch (e) {
                // Restoring token failed
            }
            setAppLoaded(true);
            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
        };

        bootstrapAsync();
    }, []);

    return appLoaded;

}