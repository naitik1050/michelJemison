import React, {useEffect, useState} from "react";
import {Stack, XStack, YStack, Text, Spinner, Image, useWindowDimensions} from "tamagui";
import Logo from "../../assets/images/Logo.svg";
import {aboutLeahData, recData} from "../../utils/constants";
import {useForm} from "react-hook-form";
import RHFInput from "../../components/react_hook_form/RHFInput";
import {useAppDispatch} from "../../@types/redux_component.d";
import {usePostSuggestionAIQueryMutation} from "../../redux/api/openAIApiSlice";
import {setSuggestions} from "../../redux/app/openAISuggestionSlice";
import {ProgressBar} from "./components/ProgressBar";
import {UserText} from "./components/UserText";
import {BottomBarQuestionaire} from "./components/bottom_bar/BottomBarQuestionaire";
import useLogout from "../../hooks/useLogout";

const RecommendationScreen = ({navigation}: any) => {
    // const {handleLogout} = useLogout();
    // useEffect(handleLogout);
    const [mutation, {data, isSuccess, isLoading}] = usePostSuggestionAIQueryMutation();
    const {control, handleSubmit} = useForm();
    const dispatch = useAppDispatch();
    const {width, height} = useWindowDimensions();

    useEffect(() => {
        if (isSuccess) {
            if (data === undefined) return;
            console.log("Received data from the backend:", data);
            dispatch(setSuggestions(data));
            navigation.navigate("Suggestion_Response");
        }
    }, [isSuccess, dispatch]);

    const onSubmit = (data: any) => {
        //TOD values can be empty liek user skips so check and if empty then skip?
        //TODO switch it back to use the mutation this mutation works
        navigation.navigate("Suggestion_Response");
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
                <ProgressBar nextRecommend={1}/>
                <UserText/>
                <YStack
                    marginTop={height * 0.05}
                    marginBottom={height * .05}
                    space={15}
                >
                    {aboutLeahData.map((item, i) => {
                        const {Icon, title, key} = item;
                        return (
                            <Stack
                                key={i}
                                width={width * 0.65}
                                paddingVertical={5}
                                flexDirection={"row"}
                                alignItems={"center"}
                                alignSelf={"center"}
                            >

                                <RHFInput
                                    control={control}
                                    name={key}
                                    placeholder={title}
                                    secureTextEntry={false}
                                    Icon={Icon}
                                />
                             </Stack>
                        );
                    })}
                </YStack>
                <BottomBarQuestionaire
                    isLoading={isLoading}
                    onPress={handleSubmit(onSubmit)}
                />
            </YStack>
        </Stack>
    );
};

export default RecommendationScreen;

