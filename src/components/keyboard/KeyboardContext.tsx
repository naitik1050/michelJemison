import React from "react";
import {TextInput} from "react-native";

interface ContextType {
    focus: boolean;
    handleFocus: (bool:boolean) => void;
    inputRef: React.RefObject<TextInput>
};
export const KeyboardContext = React.createContext<ContextType>({
    focus: false,
    handleFocus(bool): void {},
    inputRef: React.createRef<TextInput>()
});
export const useKeyboardContext = () => {
    const context = React.useContext(KeyboardContext);
    if (!context) {
        throw new Error("useKeyboardContext must be used within a KeyboardProvider");
    }
    return context;
};
