import React, {useEffect, useRef, useState} from "react";
import {Keyboard, TextInput} from "react-native";
import {KeyboardContext} from "./KeyboardContext";


interface ProviderProps {
    children: React.ReactNode;
}

export const KeyboardProvider: React.FC<ProviderProps> = ({
                                                                  children,
                                                              }) => {
    const [focus, setFocus] = useState(false);
    const inputRef = useRef<TextInput>(null);

    const handleFocus = (bool:boolean) => setFocus(bool);

    useEffect(() => {
        if (focus) inputRef.current?.focus();
    }, [focus]);

    return (
        <KeyboardContext.Provider value={{ focus, handleFocus,inputRef}}>
            {children}
        </KeyboardContext.Provider>
    );
};

