import React from "react";
import { Button } from "tamagui";
import { colors, height, width } from "../assets/colors";

interface IAuthBtn {
    title: string;
    onPress: (data: any) => void;
    bg?: boolean;
    Icon?: React.ElementType;
}

// CustomButton
const CustomButton = ({ title, onPress, bg, Icon }: IAuthBtn) => {
    return (
        <Button
            pressStyle={{
                bg: bg ? colors.lightgrey : colors.primaryColorTwo,
                borderColor: bg ? colors.lightgrey : colors.white,
                borderWidth: 2,
            }}
            icon={Icon ? <Icon /> : null}
            bg={bg ? colors.white : colors.primaryColor}
            w={"100%"}
            h={"100%"}
            color={bg ? "#2F2E41" : colors.white}
            br={14}
            fontSize={18}
            fontFamily={"AvenirNextCyrDemi"}
            onPress={onPress}
            boc={bg ? colors.light : null}
            bw={0.5}
        >
            {title}
        </Button>
    );
};

export default CustomButton;