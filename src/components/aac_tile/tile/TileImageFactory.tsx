import {Image} from 'tamagui';
import {Tile} from "../../../@types/model_";
import {AssetRecordFactory} from "../../AssetRecordFactory";
import React from "react";

type CommonProps = {
    tile: Tile;
};

type ImageProps = CommonProps & React.ComponentPropsWithoutRef<typeof Image>;

type SvgProps = CommonProps & React.ComponentPropsWithoutRef<React.FC>;

type ImageFactoryProps = ImageProps | SvgProps;

export const TileImageFactory = ({tile, ...props}: ImageFactoryProps) => {
    if (tile.imagePath)
        return <Image
            source={{uri: tile.imagePath}}
            {...props}
            resizeMode="contain"
        />
    else
        return <AssetRecordFactory
            assetRecord={tile.assetRecord!}
            {...props}
        />
};
