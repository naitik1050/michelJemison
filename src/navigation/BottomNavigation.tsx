import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {colors} from "../assets/colors";
import HomeInactive from "../assets/images/home-inactive.svg";
import HomeActive from "../assets/images/home-active.svg";
import SearchInactive from "../assets/images/search-inactive.svg";
import SearchActive from "../assets/images/search-active.svg";
import AddInactive from "../assets/images/add-active.svg";
import KeyboardInactive from "../assets/images/keyboard-inactive.svg";
import KeyboardActive from "../assets/images/keyboard-active.svg";
import SettingActive from "../assets/images/setting-active.svg";
import CustomizeWord from "../screens/Home/CustomizeWord";
import {
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import SearchScreen from "../screens/Home/SearchScreen";
import MainScreen from "../screens/Home/MainScreen";
import {SettingsPopOver} from "../components/settings_popover/SettingPopover";
import {useKeyboardContext} from "../components/keyboard/KeyboardContext";
import {BottomNavigatorParams} from "../@types/navigation";

export const BottomNavigation = () => {
    const Tab = createBottomTabNavigator<BottomNavigatorParams>();
    const {focus, handleFocus} = useKeyboardContext();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.primaryColor,
                tabBarInactiveTintColor: colors.gray,
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0,
                    marginBottom: 7,
                },

                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={MainScreen}

                options={{
                    tabBarIcon: ({color, size, focused}) =>
                        focused ? (
                            <HomeActive
                                width={responsiveWidth(3)}
                                height={responsiveHeight(3)}
                            />
                        ) : (
                            <HomeInactive
                                width={responsiveWidth(3)}
                                height={responsiveHeight(3)}
                            />
                        ),
                }}
            />
            {/*<Tab.Screen*/}
            {/*    name="SearchScreen"*/}
            {/*    component={SearchScreen}*/}
            {/*    options={{*/}
            {/*        tabBarIcon: ({color, size, focused}) =>*/}
            {/*            focused ? (*/}
            {/*                <SearchActive*/}
            {/*                    width={responsiveWidth(3)}*/}
            {/*                    height={responsiveHeight(3)}*/}
            {/*                />*/}
            {/*            ) : (*/}
            {/*                <SearchInactive*/}
            {/*                    width={responsiveWidth(3)}*/}
            {/*                    height={responsiveHeight(3)}*/}
            {/*                />*/}
            {/*            ),*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Tab.Screen*/}
            {/*    name="AddWords"*/}
            {/*    component={CustomizeWord}*/}
            {/*    options={{*/}
            {/*        tabBarStyle: {*/}
            {/*            display: "none",*/}
            {/*        },*/}
            {/*        tabBarIcon: ({color, size, focused}) => (*/}
            {/*            <AddInactive*/}
            {/*                width={responsiveWidth(5)}*/}
            {/*                height={responsiveHeight(5)}*/}
            {/*            />*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*/>*/}
            <Tab.Screen
                name="Keyboard"
                children={() => null}
                listeners={(props) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        handleFocus(!focus);
                    },
                })}
                options={{
                    tabBarIcon: ({color, size, focused}) => //TODO: cannot see the toggle due to keyboard blocking so may be uncessary?
                        focus ? (
                            <KeyboardActive
                                width={responsiveWidth(4.3)}
                                height={responsiveHeight(4.3)}
                            />
                        ) : (
                            <KeyboardInactive
                                width={responsiveWidth(3)}
                                height={responsiveHeight(3)}
                            />
                        ),
                }}
            />
            <Tab.Screen
                name="Setting"
                // component={SettingsPopOver}
                children={() => null}
                listeners={(props) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                    }
                })}
                options={{
                    tabBarIcon: () => <SettingsPopOver
                        placement="top"
                    />
                }}
            />
        </Tab.Navigator>
    );
};
