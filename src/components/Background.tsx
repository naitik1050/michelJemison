import {
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "tamagui/linear-gradient";
import { colors, height, width } from "../assets/colors";
import { Stack, Text, YStack,ScrollView } from "tamagui";
import Welcome from "../assets/images/welcome.svg";
import Logo from "../assets/images/Logo.svg";
import BackIcon from "../assets/images/backIcon.svg";
import {useNavigation} from "@react-navigation/native";
import {LoginProps} from "../@types/navigation";

interface IChildren {
  children: JSX.Element[] | JSX.Element;
  welcomeText?: string;
  navigation?: any;
}

// auth screen background LinearGradient

const AuthBackground = ({ children }: IChildren) => {
  return (
    <LinearGradient
      width="100%"
      height="100%"
      colors={["$primaryColor", "$primaryColorTwo"]}
      start={[0, 1]}
      end={[0, 5]}
    >
      {children}
    </LinearGradient>
  );
};

// auth background image

const AuthWelcomeImage = () => {
  return (
    <Stack f={0.45} jc={"center"} ai={"center"}>
      <Welcome width={"100%"} />
    </Stack>
  );
};

// auth screen background card
const AuthBackgroundCard = ({
  children,
  welcomeText
}: IChildren) => {
  const navigation = useNavigation<LoginProps>();
  return (
    <Stack f={0.55} bg={"$white"} h={"100%"} br={20}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <KeyboardAvoidingView behavior="position">
          <YStack>
            <TouchableOpacity
              onPress={() => (navigation.goBack())}
              style={{
                position: "absolute",
                top: height / 30,
                left: width / 35,
                padding: 3,
              }}
            >
              <BackIcon width={10} height={20} />
            </TouchableOpacity>

            <Stack mt={height / 15} ai={"center"} als={"center"}>
              <Logo width={width / 7} height={height / 20} />
            </Stack>

            <Stack mt={height / 14} ai={"center"} w={"60%"} als={"center"}>
              <Text
                fontFamily={"AvenirNextCyrDemi"}
                letterSpacing={0.5}
                fos={24}
                color={"$black"}
                ta={"center"}
              >
                {welcomeText}
              </Text>
            </Stack>
            {children}
          </YStack>
        </KeyboardAvoidingView>
      </ScrollView>
    </Stack>
  );
};
export { AuthBackground, AuthBackgroundCard, AuthWelcomeImage };
