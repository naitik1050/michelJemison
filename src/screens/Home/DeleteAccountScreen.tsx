import React, {useEffect, useState} from "react";
import {Stack, YStack, Text, Spinner} from "tamagui";
import Input from "../../components/TextInput";
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from "react-native-responsive-dimensions";
import {colors} from "../../assets/colors";
import RHFInput from "../../components/react_hook_form/RHFInput";
import {useYupValidationResolver} from "../../hooks/useYupValidationResolver";
import * as Yup from "yup";
import {useForm} from "react-hook-form";
import PasswordIcon from "../../assets/images/password.svg";
import CustomButton from "../../components/Button";
import {ScrollView} from "react-native";
import useUserAccountDelete from "../../hooks/useUserAccountDelete";
import EmailIcon from "../../assets/images/email.svg";

const schema = Yup.object().shape({
    // delReason: Yup.string().required("Delete Reason is required"),
    // delVerify: Yup.string().required("Delete Verification is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
        .required("Password is required")
});
const DeleteAccountScreen = ({navigation}: any) => {
    const resolver = useYupValidationResolver(schema);
    const {control, handleSubmit} = useForm({resolver});
    const [steps, setSteps] = useState(1);
    const {handle, isLoading} = useUserAccountDelete();

    const onSubmit = async (data: any) => {
        await handle(data);
        // await handleDelAcc(3)
    };


    const handleDelAcc = (num: number) => {
        if (num === 2) {
            setSteps(2);
        } else if (num === 3) {
            setSteps(3);
        } else {
            setSteps(1);
        }
    };
    return (
        <Stack flex={1} bg={colors.white}>
            <ScrollView>
                <YStack
                    pt={responsiveHeight(8)}
                    w={responsiveWidth(100)}
                    jc="center"
                    ai="center"
                >
                    {steps === 1 ? (
                        <>
                            <Text
                                color={colors.primaryColorTwo}
                                fontFamily={"AvenirNextCyrDemi"}
                                fos={responsiveFontSize(2)}
                                ml={3}
                            >
                                Are you sure you want to delete your account?
                            </Text>
                            <Stack w={"80%"} mt={responsiveHeight(4)}>
                                <Stack space={15} mt={responsiveHeight(5)}>
                                    <Text
                                        color={colors.black}
                                        fontFamily={"AvenirNextCyrMedium"}
                                        fos={responsiveFontSize(1.1)}
                                    >
                                        Deleting your account is permanent.
                                    </Text>
                                    <Text
                                        color={colors.gray}
                                        fontFamily={"AvenirNextCyrMedium"}
                                        fos={responsiveFontSize(1.1)}
                                    >
                                        Your vocabulary, settings, and preferences will be
                                        permanently deleted.
                                    </Text>
                                </Stack>

                                <Stack
                                    mt={responsiveHeight(10)}
                                    als={"center"}
                                    h={responsiveHeight(9)}
                                    w={responsiveWidth(80)}
                                    space={25}
                                >
                                    <CustomButton
                                        title={"Cancel"}
                                        onPress={() => navigation.navigate("HomeScreen")}

                                        // Icon={isLoading ? Spinner : undefined}
                                    />
                                    <CustomButton
                                        title={"Delete account"}
                                        onPress={() => handleDelAcc(2)}
                                        bg={true}
                                        // Icon={isLoading ? Spinner : undefined}
                                    />
                                </Stack>
                            </Stack>
                        </>
                    ) : steps === 2 ? (
                        <>
                            <Text
                                color={colors.primaryColorTwo}
                                fontFamily={"AvenirNextCyrDemi"}
                                fos={responsiveFontSize(2)}
                                ml={3}
                            >
                                Delete your account
                            </Text>
                            <Stack w={"80%"} mt={responsiveHeight(4)}>
                                {/*<Stack space={15} mt={responsiveHeight(5)}>*/}
                                {/*    <Text*/}
                                {/*        color={colors.black}*/}
                                {/*        fontFamily={"AvenirNextCyrMedium"}*/}
                                {/*        fos={responsiveFontSize(1.1)}*/}
                                {/*    >*/}
                                {/*        Why are you deleting your account?*/}
                                {/*    </Text>*/}

                                {/*    <RHFInput*/}
                                {/*        control={control}*/}
                                {/*        name={"delReason"}*/}
                                {/*        placeholder={"Please provide your reason here"}*/}
                                {/*        secureTextEntry={false}*/}
                                {/*    />*/}
                                {/*</Stack>*/}
                                <Stack space={15} mt={responsiveHeight(5)}>
                                    <Text
                                        color={colors.black}
                                        fontFamily={"AvenirNextCyrMedium"}
                                        fos={responsiveFontSize(1.1)}
                                    >
                                        To confirm account deletion, please enter your email
                                        in the field below.
                                    </Text>
                                    <RHFInput
                                        control={control}
                                        name={"email"}
                                        placeholder={"Email"}
                                        secureTextEntry={false}
                                        Icon={EmailIcon}
                                    />
                                </Stack>
                                <Stack space={15} mt={responsiveHeight(5)}>
                                    <Text
                                        color={colors.black}
                                        fontFamily={"AvenirNextCyrMedium"}
                                        fos={responsiveFontSize(1.1)}
                                    >
                                        To continue, please enter your password.
                                    </Text>

                                    <RHFInput
                                        control={control}
                                        name={"password"}
                                        placeholder={"Password"}
                                        secureTextEntry={true}
                                        Icon={PasswordIcon}
                                    />
                                </Stack>
                                <Stack
                                    mt={responsiveHeight(10)}
                                    als={"center"}
                                    h={responsiveHeight(9)}
                                    w={responsiveWidth(80)}
                                >
                                    <CustomButton
                                        title={"Permanently delete account"}
                                        onPress={handleSubmit(onSubmit)}
                                        Icon={isLoading ? Spinner : undefined}
                                    />
                                </Stack>
                            </Stack>
                        </>
                    ) : (
                        <>
                            <Text
                                color={colors.primaryColorTwo}
                                fontFamily={"AvenirNextCyrDemi"}
                                fos={responsiveFontSize(2)}
                                ml={3}
                            >
                                Delete your account
                            </Text>
                            <Stack w={"80%"} mt={responsiveHeight(4)}>
                                <Stack space={15} mt={responsiveHeight(5)}>
                                    <Text
                                        color={colors.black}
                                        fontFamily={"AvenirNextCyrMedium"}
                                        fos={responsiveFontSize(1.1)}
                                    >
                                        Your account has been deleted.
                                    </Text>

                                    <Text
                                        color={colors.gray}
                                        fontFamily={"AvenirNextCyrMedium"}
                                        fos={responsiveFontSize(1.1)}
                                    >
                                        We’re sad to see you go!
                                    </Text>
                                </Stack>

                                <Stack
                                    mt={responsiveHeight(10)}
                                    als={"center"}
                                    h={responsiveHeight(9)}
                                    w={responsiveWidth(80)}
                                >
                                    <CustomButton
                                        title={"Return to home"}
                                        onPress={() => handleDelAcc(1)}
                                        // Icon={isLoading ? Spinner : undefined}
                                    />
                                </Stack>
                            </Stack>
                        </>
                    )}
                </YStack>
            </ScrollView>
        </Stack>
    );
};

export default DeleteAccountScreen;
