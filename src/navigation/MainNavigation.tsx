import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";
import {selectIsLoggedIn} from "../redux/api/authSlice";
import {useAppSelector} from "../@types/redux_component.d";
import useLoadApp from "../hooks/useLoadApp";
import { Stack } from "tamagui";

const MainNavigation = () => {
  const appLoaded = useLoadApp();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  // if (!appLoaded) return <SplashScreen/>; // We haven't finished checking for the token yet
  if (!appLoaded) return <Stack></Stack>; // We haven't finished checking for the token yet
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default MainNavigation;
