import React, {useEffect, useState} from "react";
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import {Button, Image, Spinner, Stack, Text, XStack, YStack} from "tamagui";
import {colors, height, width} from "../../assets/colors";
import {
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import Input from "../../components/TextInput";
import SpeakTextIcon from "../../assets/images/speaktextIcon.svg";
import DisplayTextIcon from "../../assets/images/displaytextIcon.svg";
import SearchIcon from "../../assets/images/searchIcon.svg";
import CreateActiveIcon from "../../assets/images/createimage-active.svg";

import CustomButton from "../../components/Button";
import * as ImagePicker from "expo-image-picker";
import {selectButtons} from "../../utils/constants";
import {useAppDispatch, useAppSelector} from "../../@types/redux_component.d";
import {selectCustomWord} from "../../redux/app/customizeWordSlice";
import {useNavigation} from "@react-navigation/native";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import {useYupValidationResolver} from "../../hooks/useYupValidationResolver";
import {usePostCustomWordMutationMutation} from "../../redux/api/customWordApiSlice";
import {TileImagePartial} from "../../@types/model_";
import {toggleEdit} from "../../redux/app/toggleSlice";
import RHFImageInput from "../../components/react_hook_form/RHFImageInput";
import RHFInput from "../../components/react_hook_form/RHFInput";
import EmailIcon from "../../assets/images/email.svg";
import {CustomizeWordProps} from "../../@types/navigation";

interface Ivalue {
    displayText: string;
    speakText: string;
    searchWord: string;
}

const schema = Yup.object().shape({
    wordToDisplay: Yup.string(),
    wordToSpeak: Yup.string(),
    image: Yup.mixed().notRequired()
});


const CustomizeWord = () => {
    const navigation = useNavigation<CustomizeWordProps>();
    const customWord = useAppSelector(selectCustomWord);
    const resolver = useYupValidationResolver(schema);
    const dispatch = useAppDispatch();
    const [mutation, {isLoading}] = usePostCustomWordMutationMutation();
    const {control, handleSubmit} = useForm({
        resolver,
        defaultValues: customWord
    });

    // const data = route?.params;
    // const [value, setValue] = useState<Ivalue>({
    //     displayText: data?.item?.title || "",
    //     speakText: data?.item?.title || "",
    //     searchWord: "",
    // });
    // //handle change
    // const handleChange = (name: string, val: string) => {
    //     setValue({
    //         ...value,
    //         [name]: val,
    //     });
    // };


    const onSubmit = async (customWordRequest: TileImagePartial) => {
        console.log(customWordRequest, 'customWordRequest');

        // Create a FormData object and append the fields
        const formData = new FormData();

        // Create an object to store the non-image values
        const metadata: Partial<TileImagePartial> = {};

        for (const key in customWordRequest) {
            if (key === 'image' && customWordRequest.image) {
                formData.append('file', customWordRequest.image);
            } else {
                metadata[key] = customWordRequest[key];
            }
        }

        // Append the metadata as a stringified JSON
        formData.append('metadata', JSON.stringify(metadata));

        console.log(formData, "Formdata");

        await mutation(formData);
        await dispatch(toggleEdit());
        navigation.goBack();
    };

    return (
        <Stack f={1} bg={colors.white}>
            <KeyboardAvoidingView behavior="padding">
                <ScrollView
                    contentContainerStyle={{
                        alignItems: "center",
                        paddingBottom: 20,
                    }}
                >
                    <YStack pt={responsiveHeight(8)} w={responsiveWidth(90)}>
                        <Text
                            color={colors.primaryColorTwo}
                            fontFamily={"AvenirNextCyrDemi"}
                            fos={responsiveFontSize(1.7)}
                            ml={3}
                        >
                            {customWord ? "Edit Button" : "Create Word"}
                        </Text>

                        <Stack mt={responsiveHeight(5)} width={responsiveWidth(70)}>
                            {/* <Input
                Icon={DisplayTextIcon}
                placeholder={"Text to display"}
                value={value.displayText}
                onChange={(val: string) => handleChange("displayText", val)}
              /> */}
                            {/*<Input*/}
                            {/*    Icon={SpeakTextIcon}*/}
                            {/*    placeholder={"Text to speak"}*/}
                            {/*    value={customWord ? customWord.wordToSpeak : ""}*/}
                            {/*    onChange={(val: string) => handleChange("speakText", val)}*/}
                            {/*/>*/}
                            <RHFInput
                                control={control}
                                name={"wordToSpeak"}
                                placeholder={"word to speak"}
                                secureTextEntry={false}
                                Icon={SpeakTextIcon}
                            />
                            <RHFInput
                                control={control}
                                name={"wordToDisplay"}
                                placeholder={"word to display"}
                                secureTextEntry={false}
                                Icon={DisplayTextIcon}
                            />
                        </Stack>

                        {/*<YStack w={responsiveWidth(70)} mt={responsiveHeight(5)}>*/}
                        {/*    <Stack ai={"center"} fd={"row"} jc={"space-between"} w={"100%"}>*/}
                        {/*        {selectButtons.map((item, i) => {*/}
                        {/*            const {title, ActiveIcon, InActiveIcon} = item;*/}
                        {/*            console.log(i, options);*/}
                        {/*            return (*/}
                        {/*                <Stack key={i} w={"32%"} h={responsiveHeight(7.5)}>*/}
                        {/*                    <Button*/}
                        {/*                        icon={*/}
                        {/*                            i == options ? (*/}
                        {/*                                <ActiveIcon width={20} height={20}/>*/}
                        {/*                            ) : (*/}
                        {/*                                <InActiveIcon width={20} height={20}/>*/}
                        {/*                            )*/}
                        {/*                        }*/}
                        {/*                        bg={*/}
                        {/*                            i == options*/}
                        {/*                                ? colors.primaryColor*/}
                        {/*                                : "rgba(75, 58, 255, 0.1)"*/}
                        {/*                        }*/}
                        {/*                        w={"100%"}*/}
                        {/*                        h={"100%"}*/}
                        {/*                        color={*/}
                        {/*                            i == options ? colors.white : colors.primaryColor*/}
                        {/*                        }*/}
                        {/*                        br={14}*/}
                        {/*                        fontSize={19}*/}
                        {/*                        fontFamily={"AvenirNextCyrDemi"}*/}
                        {/*                        onPress={() => {*/}
                        {/*                            i == 2 && !image ? pickImage(i) : setOptions(i);*/}
                        {/*                        }}*/}
                        {/*                        bw={0.5}*/}
                        {/*                    >*/}
                        {/*                        {title}*/}
                        {/*                    </Button>*/}
                        {/*                </Stack>*/}
                        {/*            );*/}
                        {/*        })}*/}
                        {/*    </Stack>*/}

                        {/*    {options == 0 && data?.item?.image ? (*/}
                        {/*        <>*/}
                        {/*            <XStack*/}
                        {/*                bg={colors.white}*/}
                        {/*                shadowColor={colors.light}*/}
                        {/*                shadowOpacity={0.9}*/}
                        {/*                shadowOffset={{width: 0.5, height: 0.5}}*/}
                        {/*                ai={"center"}*/}
                        {/*                jc={"center"}*/}
                        {/*                w={responsiveWidth(15)}*/}
                        {/*                h={responsiveHeight(15)}*/}
                        {/*                br={10}*/}
                        {/*                mt={responsiveHeight(7)}*/}
                        {/*                bw={0.2}*/}
                        {/*            >*/}
                        {/*                <Image*/}
                        {/*                    w={70}*/}
                        {/*                    h={70}*/}
                        {/*                    resizeMode="contain"*/}
                        {/*                    source={data?.item?.image}*/}
                        {/*                    br={7}*/}
                        {/*                />*/}
                        {/*            </XStack>*/}
                        {/*        </>*/}
                        {/*    ) : options == 0 && !data?.item?.image ? (*/}
                        {/*        <Stack*/}
                        {/*            ai={"center"}*/}
                        {/*            jc={"center"}*/}
                        {/*            h={responsiveHeight(15)}*/}
                        {/*            mt={responsiveHeight(7)}*/}
                        {/*        >*/}
                        {/*            <Text*/}
                        {/*                fos={responsiveFontSize(1.2)}*/}
                        {/*                color={"rgba(71, 72, 71, 0.6)"}*/}
                        {/*            >*/}
                        {/*                Images not found*/}
                        {/*            </Text>*/}
                        {/*        </Stack>*/}
                        {/*    ) : null}*/}
                        {/*    {options == 1 ? (*/}
                        {/*        <XStack*/}
                        {/*            w={"100%"}*/}
                        {/*            h={responsiveHeight(15)}*/}
                        {/*            mt={responsiveHeight(7)}*/}
                        {/*            ai={"center"}*/}
                        {/*            jc={"space-around"}*/}
                        {/*        >*/}
                        {/*            <Stack w={"60%"}>*/}
                        {/*                <Input*/}
                        {/*                    Icon={SearchIcon}*/}
                        {/*                    placeholder={"underwater basket weaving"}*/}
                        {/*                    value={value.searchWord}*/}
                        {/*                    onChange={(val: string) =>*/}
                        {/*                        handleChange("searchWord", val)*/}
                        {/*                    }*/}
                        {/*                    createSymbol={true}*/}
                        {/*                />*/}
                        {/*            </Stack>*/}
                        {/*            <Stack w={"30%"} h={responsiveHeight(7)}>*/}
                        {/*                <CustomButton*/}
                        {/*                    Icon={CreateActiveIcon}*/}
                        {/*                    title={"Create an image"}*/}
                        {/*                    onPress={() => console.log("object")}*/}
                        {/*                />*/}
                        {/*            </Stack>*/}
                        {/*        </XStack>*/}
                        {/*    ) : null}*/}

                        {/*    {options == 2 && image ? (*/}
                        {/*        <TouchableOpacity*/}
                        {/*            style={{*/}
                        {/*                backgroundColor: colors.white,*/}
                        {/*                shadowColor: colors.light,*/}
                        {/*                shadowOpacity: 0.9,*/}
                        {/*                shadowOffset: {width: 0.5, height: 0.5},*/}
                        {/*                alignItems: "center",*/}
                        {/*                justifyContent: "center",*/}
                        {/*                width: responsiveWidth(15),*/}
                        {/*                height: responsiveHeight(15),*/}
                        {/*                borderRadius: 10,*/}
                        {/*                marginTop: responsiveHeight(7),*/}
                        {/*                borderWidth: 0.2,*/}
                        {/*            }}*/}
                        {/*            activeOpacity={0.5}*/}
                        {/*            onPress={() => {*/}
                        {/*                image && pickImage(2);*/}
                        {/*            }}*/}
                        {/*        >*/}
                        {/*            <Image*/}
                        {/*                w={140}*/}
                        {/*                h={140}*/}
                        {/*                resizeMode="contain"*/}
                        {/*                source={{uri: image}}*/}
                        {/*                br={10}*/}
                        {/*            />*/}
                        {/*        </TouchableOpacity>*/}
                        {/*    ) : options == 2 && imageNotSet ? (*/}
                        {/*        <Stack*/}
                        {/*            ai={"center"}*/}
                        {/*            jc={"center"}*/}
                        {/*            h={responsiveHeight(15)}*/}
                        {/*            mt={responsiveHeight(7)}*/}
                        {/*        >*/}
                        {/*            <Text*/}
                        {/*                fos={responsiveFontSize(1.2)}*/}
                        {/*                color={"rgba(71, 72, 71, 0.6)"}*/}
                        {/*            >*/}
                        {/*                Images not Set*/}
                        {/*            </Text>*/}
                        {/*        </Stack>*/}
                        {/*    ) : null}*/}
                        {/*</YStack>*/}
                        <RHFImageInput control={control} name="image" label="Select Image"/>

                        <Stack
                            mt={responsiveHeight(17)}
                            ai={"center"}
                            fd={"row"}
                            jc={"space-between"}
                            w={"60%"}
                        >
                            <Stack w={width / 4} h={height / 13}>
                                <CustomButton
                                    title={"Cancel"}
                                    onPress={() => navigation.goBack()}
                                    bg={true}
                                />
                            </Stack>
                            <Stack w={width / 4} h={height / 13}>
                                <CustomButton
                                    Icon={isLoading ? ()=> <Spinner/> : undefined}
                                    title={"Save"}
                                    onPress={handleSubmit(onSubmit)}
                                />
                            </Stack>
                        </Stack>
                    </YStack>
                </ScrollView>
            </KeyboardAvoidingView>
        </Stack>
    );
};

export default CustomizeWord;
