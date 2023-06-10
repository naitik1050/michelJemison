import {AssetRecord} from "../@types/image";
import {ImageSourcePropType} from "react-native";
import {Image, Stack, Text} from 'tamagui';

type CommonProps = {
    assetRecord: AssetRecord;
};

type ImageProps =
    CommonProps
    & Omit<React.ComponentPropsWithoutRef<typeof Image>, 'source' | 'resizeMode' | 'hitSlop'>
    & { src: ImageSourcePropType };


type SvgProps = CommonProps & React.ComponentPropsWithoutRef<React.FC>;

type TextProps = CommonProps & React.ComponentPropsWithoutRef<typeof Text>;

type ImageFactoryProps = ImageProps | SvgProps | TextProps;
export const AssetRecordFactory = ({assetRecord, ...props}: ImageFactoryProps) => {
    if (assetRecord === undefined || assetRecord.type === undefined) return null;
    switch (assetRecord.type) {
        case "png":
            const imageProps = props as ImageProps;
            return <Image
                source={assetRecord.asset.value as ImageSourcePropType}
                {...imageProps}
                resizeMode="contain"
            />;
        case "svg":
            const SvgComponent = assetRecord.asset.value as React.FC;
            return <SvgComponent {...props} />;
        case "text":
            return <Text>{assetRecord.asset.value}</Text>;
        default:
            return null;
    }
};
