import React, {useEffect} from "react";
import {Stack, useWindowDimensions, YStack} from "tamagui";
import {useAppDispatch} from "../../@types/redux_component.d";
import {useForm} from "react-hook-form";
import {UserText} from "../recommendation/components/UserText";
import {ProgressBar} from "../recommendation/components/ProgressBar";
import Logo from "../../assets/images/Logo.svg";
import {OpenAI_SuggestionTiles} from "./suggestion_tiles";
import {usePostSuggestionAIQueryMutation} from "../../redux/api/openAIApiSlice";
import {BottomBarQuestionaire} from "../recommendation/components/bottom_bar/BottomBarQuestionaire";

const SuggestionResponseScreen = ({navigation}: any) => {

    const [mutation, {data, isSuccess, isLoading}] = usePostSuggestionAIQueryMutation();
    const {control, handleSubmit} = useForm();
    const dispatch = useAppDispatch();
    const {height, width} = useWindowDimensions();

    useEffect(() => {
        if (isSuccess) {
            //TODO: here
            // if (data === undefined) return;
            // console.log("Received data from the backend:", data);
            // dispatch(setSuggestions(data));
            // setNextRecommend(2);
            // navigation.navigate("AI_Suggestions");
        }
    }, [isSuccess, dispatch]);


    const onSubmit = (data: any) => {
        console.log(data, 'LOL you passed it up')
        //TODO make a mutation that will create multiple custom word based on subject
        // Convert the data object into a list
        // const dataList: OpenAI_SuggestionsRequest[] = Object.entries(data).map(([subject, request]) => {
        //     return {
        //         subject,
        //         request: request as string
        //     };
        // });
        // mutation(dataList);
    }

    return (
        <Stack flex={1} backgroundColor={"$white"}>
            <YStack
                alignItems={"center"}
                alignSelf={"center"}
                width={width * 0.98}
            >
                <Stack marginTop={height / 20}>
                    <Logo width={width / 7} height={height / 20}/>
                </Stack>
                <ProgressBar nextRecommend={2}/>
                <UserText/>
                <OpenAI_SuggestionTiles
                    control={control}
                />
                <BottomBarQuestionaire
                    isLoading={isLoading}
                    onPress={handleSubmit(onSubmit)}
                />
            </YStack>
        </Stack>
    );
};

export default SuggestionResponseScreen;

