import React, {useEffect, useState} from "react";
import {Spinner, Stack, Text, useWindowDimensions, XStack} from "tamagui";
import EmailIcon from "../../assets/images/email.svg";
import PasswordIcon from "../../assets/images/password.svg";
import CustomButton from "../../components/Button";
import {
    AuthBackground,
    AuthBackgroundCard,
    AuthWelcomeImage,
} from "../../components/Background";
import {useNavigation} from "@react-navigation/native";
import RHFInput from "../../components/react_hook_form/RHFInput";
import {useYupValidationResolver} from "../../hooks/useYupValidationResolver";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import useLogin from "../../hooks/useLogin";
import {LoginProps} from "../../@types/navigation";

const schema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
        .required("Password is required")
    //     .min(5, "Password must be at least 5 characters long"),
});
const LoginScreen = () => {
    const navigation = useNavigation<LoginProps>();
    const resolver = useYupValidationResolver(schema);
    const {control, handleSubmit} = useForm({resolver});
    const {handleLogin, isLoading} = useLogin();
    const {height, width} = useWindowDimensions();

    return (
        <Stack f={1}>
            <AuthBackground>
                <XStack f={1} ai={"center"} jc={"space-around"} p={30}>
                    <AuthWelcomeImage/>
                    <AuthBackgroundCard welcomeText="Hello again!">
                        <Stack
                            mt={height / 13}
                            space={"$5"}
                            // ai={"center"}
                            w={width / 2.5}
                            als={"center"}
                        >
                            <RHFInput
                                control={control}
                                name={"email"}
                                placeholder={"Email"}
                                secureTextEntry={false}
                                Icon={EmailIcon}
                            />
                            <RHFInput
                                control={control}
                                name={"password"}
                                placeholder={"Password"}
                                secureTextEntry={true}
                                Icon={PasswordIcon}
                            />
                        </Stack>
                        {/*<Text*/}
                        {/*    fontFamily={"AvenirNextCyrMedium"}*/}
                        {/*    letterSpacing={0.5}*/}
                        {/*    fos={16}*/}
                        {/*    color={"$primaryColor"}*/}
                        {/*    marginTop={20}*/}
                        {/*    alignItems={"center"}*/}
                        {/*    alignSelf={"center"}*/}
                        {/*>*/}
                        {/*    Forgot password!*/}
                        {/*</Text>*/}
                        <Stack mt={height / 8} als={"center"} w={width / 4} h={height / 13}>
                            <CustomButton
                                title={"Log in"}
                                onPress={handleSubmit(handleLogin)}
                                Icon={isLoading ? Spinner : undefined}
                            />

                        </Stack>
                        <Stack mt={height / 30} jc={"center"} ai={"center"} fd={"row"}>
                            <Text
                                fontFamily={"AvenirNextCyrMedium"}
                                letterSpacing={0.5}
                                fos={16}
                                color={"$grayOutText"}
                            >
                                Don’t have an account?
                            </Text>
                            <Text
                                fontFamily={"AvenirNextCyrMedium"}
                                letterSpacing={0.5}
                                fos={16}
                                color={"$primaryColor"}
                                alignItems={"center"}
                                marginLeft={5}
                                onPress={() => navigation.navigate("SignupScreen")}
                            >
                                Sign up
                            </Text>
                        </Stack>
                    </AuthBackgroundCard>
                </XStack>
            </AuthBackground>
        </Stack>
    );
};

export default LoginScreen;
