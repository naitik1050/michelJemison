import {useEffect, useState} from "react";
import {useGetCustomWordsByUserQuery} from "../../redux/api/customWordApiSlice";
import {CustomTile, Tile} from "../../@types/model_";
import TileMapper from "../../utils/TileMapper";



export default (): { tilesCustom: Tile[] } => {
    const [tilesCustom, setTilesCustom] = useState<CustomTile[]>([]);
    const { data: customWords = [], isSuccess } = useGetCustomWordsByUserQuery();
    useEffect(() => {
        if(isSuccess) setTilesCustom(TileMapper.fromCustomWordDTOs(customWords));
    }, [isSuccess, customWords])

    return { tilesCustom} ;
}