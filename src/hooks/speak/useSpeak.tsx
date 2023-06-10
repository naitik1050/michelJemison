import * as Speech from "expo-speech";
import {useEffect} from "react";
import {selectIsTimeout, setIsTimeout} from "../../redux/app/timeOutSlice";
import {useAppDispatch, useAppSelector} from "../../@types/redux_component.d";

export default () => {
    const dispatch = useAppDispatch();
    const isTimeout = useAppSelector(selectIsTimeout);

    const handleSpeak = async (string: string): Promise<boolean> => {
        if (!isTimeout) {
            Speech.speak(string);
            dispatch(setIsTimeout(true));
            return true;
        } else {
            return false;
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(setIsTimeout(false));
        }, 500);
        return () => {
            clearTimeout(timeout);
        };
    }, [isTimeout, dispatch]);

    return { handleSpeak };
};
