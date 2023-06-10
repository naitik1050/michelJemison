import {ThemedStyledProps} from "styled-components";
import {DefaultTheme} from "styled-components/native";
import * as React from "react";
import {TextInput} from "react-native";

type TextProps = ThemedStyledProps<{
    screenWidth: number;
}, DefaultTheme> & React.ComponentProps<typeof TextInput>;