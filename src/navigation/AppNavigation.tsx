import React from "react";
import CustomizeWord from "../screens/Home/CustomizeWord";
import {BottomNavigation} from "./BottomNavigation";
import RecommendationScreen from "../screens/recommendation/RecommendationScreen";
import SuggestionResponseScreen from "../screens/suggestion/SuggestionResponseScreen";
import DeleteAccountScreen from "../screens/Home/DeleteAccountScreen";
import {AppNavigatorParams} from "../@types/navigation";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AppNavigation = () => {
    const Stack = createNativeStackNavigator<AppNavigatorParams>();

    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="Recommendation"
                component={RecommendationScreen}
            />
            <Stack.Screen
                name="Suggestion_Response"
                component={SuggestionResponseScreen}
            />
            <Stack.Screen
                name="Home"
                component={BottomNavigation}
            />
            <Stack.Screen
                name="CustomizeWord"
                component={CustomizeWord}
            />
            <Stack.Screen
                name="Delete"
                component={DeleteAccountScreen}
            />
        </Stack.Navigator>
    );
};

export default AppNavigation;
