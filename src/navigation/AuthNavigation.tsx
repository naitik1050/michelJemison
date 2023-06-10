import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "../screens/Auth/LoginScreen";
import SignupScreen from "../screens/Auth/SignupScreen";
import {AuthNavigatorParams} from "../@types/navigation";
import {BottomNavigation} from "./BottomNavigation";

const AuthNavigation = () => {
    const Stack = createNativeStackNavigator<AuthNavigatorParams>();
    return (
        <Stack.Navigator
            initialRouteName={"Home"}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="LoginScreen"
                children={() => <LoginScreen/>}
            />
            <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
            />
            <Stack.Screen
                name="Home"
                component={BottomNavigation}
            />

        </Stack.Navigator>
    );
};

export default AuthNavigation;
