import {NativeStackNavigationProp, NativeStackScreenProps} from "@react-navigation/native-stack";

type AuthNavigatorParams = {
    LoginScreen: undefined;
    SignupScreen: undefined;
    Home: undefined;
};


type TabNavigatorParams = {
    All: undefined;
    Eat: undefined;
    SVG: undefined;
};
export type TabNavigatorParamEnum = keyof TabNavigatorParams;

type AppNavigatorParams = {
    Recommendation: undefined;
    Suggestion_Response: undefined;
    Home: undefined;
    CustomizeWord: undefined;
    Delete: undefined;
};
type BottomNavigatorParams = {
    HomeScreen: undefined;
    // SearchScreen: undefined; // Uncomment this if you're going to use SearchScreen
    // AddWords: undefined; // Uncomment this if you're going to use AddWords
    Keyboard: undefined;
    Setting: undefined;
};

// type CoreScreenNavigationProp = NativeStackNavigationProp<TabNavigatorParams, 'core'>;
// type AI_SuggestionNavigationProp = NativeStackScreenProps<AppNavigatorParams, "AI_Suggestion">;
type LoginProps = NativeStackNavigationProp<AuthNavigatorParams, "LoginScreen">;
type SignupProps = NativeStackNavigationProp<AuthNavigatorParams, "SignupScreen">;
type CustomizeWordProps = NativeStackNavigationProp<AppNavigatorParams, "CustomizeWord">;
type SettingsAuthorizedProp = NativeStackNavigationProp<AppNavigatorParams, "Setting">;
type SettingsUnauthorizedProp = NativeStackNavigationProp<AuthNavigatorParams, "Setting">;
