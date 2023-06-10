import {Control, Controller, FieldValues} from "react-hook-form";
import * as ImagePicker from 'expo-image-picker';
// import Button from "../Button";
import {View, Image} from 'react-native';
import {YStack, Button, Stack} from "tamagui";
import {responsiveHeight, responsiveWidth} from "react-native-responsive-dimensions";
import ChooseActiveIcon from "../../assets/images/chooseimage-active.svg";
interface RHFImageInputProps {
    control: Control<FieldValues, any>;
    name: string;
    label: string;
}

const RHFImageInput: React.FC<RHFImageInputProps> = ({control, name, label}) => {
    const pickImage = async (onChange: (image: any) => void) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
        });

        if (!result.canceled) {
            const localUri = result.assets[0].uri;
            const filename = localUri.split('/').pop();
            if (filename === undefined) return;

            // Infer the type of the image
            const match = /\.(\w+)$/.exec(filename);
            const type = match ? `image/${match[1]}` : `image`;

            // Create the file object and pass it to the `onChange` handler
            const image = {
                uri: localUri,
                name: filename,
                type,
            };

            onChange(image);
        }
    };

    return (
        <Controller
            control={control}
            name={name}
            render={({field: {value, onChange}}) => (
                <YStack>
                    <Stack ai={"center"} fd={"row"} jc={"space-between"} w={"100%"}>
                        <Stack w={"32%"}>
                        <Button
                            backgroundColor={"$primaryColor"}
                            shadowColor={"light"}
                            color={"white"}
                            fontSize={19}
                            marginTop={responsiveHeight(7)}
                            borderWidth={0.2}
                            onPress={() => pickImage(onChange)}
                            icon={<ChooseActiveIcon width={20} height={20}/>}
                        >{label}</Button>
                        </Stack>
                    </Stack>
                    <Stack>
                        {value && <Image source={{uri: value.uri}} style={{width: 200, height: 200}}/>}
                    </Stack>
                </YStack>
            )}
        />
    );
};
{/*    <Stack ai={"center"} fd={"row"} jc={"space-between"} w={"100%"}>*/
}
{/*        {selectButtons.map((item, i) => {*/
}
{/*            const {title, ActiveIcon, InActiveIcon} = item;*/
}
{/*            console.log(i, options);*/
}
{/*            return (*/
}
{/*                <Stack key={i} w={"32%"} h={responsiveHeight(7.5)}>*/
}
{/*                    <Button*/
}
{/*                        icon={*/
}
{/*                            i == options ? (*/
}
{/*                                <ActiveIcon width={20} height={20}/>*/
}
{/*                            ) : (*/
}
{/*                                <InActiveIcon width={20} height={20}/>*/
}
{/*                            )*/
}
{/*                        }*/
}
{/*                        bg={*/
}
{/*                            i == options*/
}
{/*                                ? colors.primaryColor*/
}
{/*                                : "rgba(75, 58, 255, 0.1)"*/
}
{/*                        }*/
}
{/*                        w={"100%"}*/
}
{/*                        h={"100%"}*/
}
{/*                        color={*/
}
{/*                            i == options ? colors.white : colors.primaryColor*/
}
{/*                        }*/
}
{/*                        br={14}*/
}
{/*                        fontSize={19}*/
}
{/*                        fontFamily={"AvenirNextCyrDemi"}*/
}
{/*                        onPress={() => {*/
}
{/*                            i == 2 && !image ? pickImage(i) : setOptions(i);*/
}
{/*                        }}*/
}
{/*                        bw={0.5}*/
}
{/*                    >*/
}
{/*                        {title}*/
}
{/*                    </Button>*/
}
{/*                </Stack>*/
}
{/*            );*/
}
{/*        })}*/
}
{/*    </Stack>*/
}


export default RHFImageInput;
//                         backgroundColor={"white"}
//                         shadowColor={"light"}
//                         shadowOffset={{width:0.5, height:0.5}}
//                         alignItems={"center"}
//                         justifyContent={"center"}
//                         width={responsiveWidth(15)}
//                         height={responsiveHeight(15)}
//                         borderRadius={10}
//                         marginTop={responsiveHeight(7)}
//                         borderWidth={0.2}