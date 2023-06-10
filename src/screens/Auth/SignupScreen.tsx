import React from "react";
import {Spinner, Stack, Text, useWindowDimensions, XStack} from "tamagui";
import EmailIcon from "../../assets/images/email.svg";
import PasswordIcon from "../../assets/images/password.svg";
import UserIcon from "../../assets/images/user.svg";
import * as Yup from "yup";

import {
    AuthBackground,
    AuthBackgroundCard,
    AuthWelcomeImage,
} from "../../components/Background";
import CustomButton from "../../components/Button";
import RHFInput from "../../components/react_hook_form/RHFInput";
import {useYupValidationResolver} from "../../hooks/useYupValidationResolver";
import {useForm} from "react-hook-form";
import useRegister from "../../hooks/useRegister";
import {LoginProps, SignupProps} from "../../@types/navigation";
import {useNavigation} from "@react-navigation/native";

const schema = Yup.object().shape({
    firstname: Yup.string()
        .required("First Name Is Required")
        .min(1, "Should be greater than 1 length long"),
    lastname: Yup.string()
        .required("Last Name Is Required")
        .min(1, "Should be greater than 1 length long"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .min(5, "Password must be at least 5 characters long"),
});
const SignupScreen = () => {
    const navigation = useNavigation<SignupProps>();
    const resolver = useYupValidationResolver(schema);
    const {control, handleSubmit} = useForm({resolver});
    const {handleMutation,isLoading} = useRegister();
    const {height, width} = useWindowDimensions();

    return (
        <Stack f={1}>
            <AuthBackground>
                <XStack f={1} ai={"center"} jc={"space-around"} p={30}>
                    <AuthWelcomeImage/>

                    <AuthBackgroundCard
                        navigation={navigation}
                        welcomeText="Welcome to Flexspeak. We’re happy you’re joining us!"
                    >
                        <Stack
                            mt={height / 28.5}
                            space={"$5"}
                            als={"center"}
                            w={width / 2.5}

                        >
                            <Stack
                                fd={"row"}
                            >
                                <Stack
                                    width={"50%"}
                                    boc={"$light"}
                                >
                                    <RHFInput
                                        control={control}
                                        name={"firstname"}
                                        placeholder={"First Name"}
                                        secureTextEntry={false}
                                        Icon={UserIcon}
                                    />
                                </Stack>
                                <Stack
                                    width={"50%"}
                                    boc={"$light"}
                                    fd={"row"}
                                >
                                    <RHFInput
                                        control={control}
                                        name={"lastname"}
                                        placeholder={"Last Name"}
                                        secureTextEntry={false}
                                        Icon={null}
                                    />
                                </Stack>
                            </Stack>
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

                        <Stack
                            w={width / 4}
                            h={height / 13}
                            mt={height / 20}
                            als={"center"}
                        >
                            <CustomButton
                                title={"Create my account"}
                                onPress={handleSubmit(handleMutation)}
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
                                Already have an account?
                            </Text>
                            <Text
                                fontFamily={"AvenirNextCyrMedium"}
                                letterSpacing={0.5}
                                fos={16}
                                color={"$primaryColor"}
                                onPress={() => navigation.navigate("LoginScreen")}
                                alignItems={"center"}
                                marginLeft={5}
                            >
                                Log In
                            </Text>
                        </Stack>
                    </AuthBackgroundCard>
                </XStack>
            </AuthBackground>
        </Stack>
    );
};

export default SignupScreen;
