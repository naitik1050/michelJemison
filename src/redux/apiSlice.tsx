import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
import { RootState} from "../@types/redux_type";
import Constants from 'expo-constants';
import {setSignIn, setSignOut} from "./api/authSlice";
import * as SecureStore from 'expo-secure-store';
export const baseQuery = fetchBaseQuery(
    {
        baseUrl: Constants.manifest?.extra?.apiUrl,
        mode: "cors",
        credentials: 'include',
        prepareHeaders: (headers, {getState, endpoint}) => {
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers;
        },
    }
);
const refreshQuery = fetchBaseQuery({
    baseUrl: Constants.manifest?.extra?.apiUrl,
    mode: "cors",
    credentials: 'include',
    prepareHeaders: (headers, {getState, endpoint}) => {
        const token = (getState() as RootState).auth.refreshToken;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers;
    },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
    // console.log(API_URL,"APIURLILOVECAKE")
    let result: any = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 403) {
        console.log('sending refresh token')
        // send refresh token to get new access token
        const refreshResult: any = await refreshQuery('/auth/refresh', api, extraOptions);
        // console.log(refreshResult,"REFRESHRESULTER")
        if (refreshResult?.data) {
            // store the new token
            await handleSetUserToken(
                refreshResult.data.token,
                refreshResult.data.refreshToken
                );
            api.dispatch(setSignIn({
                token: refreshResult.data.token,
                refreshToken: refreshResult.data.refreshToken
            }))
            // retry the original query with new access token
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch((setSignOut()))
        }
    }

    return result
}
const handleSetUserToken = async (token:any,refreshToken:any) => {
        await SecureStore.setItemAsync("userToken", token);
        await SecureStore.setItemAsync("refreshToken", refreshToken);

};
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    // baseQuery,
    endpoints: (builder) => ({})
})
