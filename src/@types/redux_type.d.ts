import {store} from "../redux/store";
type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
type AuthState = {
    isLoggedIn: boolean;
    token: string | null;
    refreshToken: string | null;
}
