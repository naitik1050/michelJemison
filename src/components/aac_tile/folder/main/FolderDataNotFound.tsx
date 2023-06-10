import {colors} from "../../../../assets/colors";
import {Stack,Text} from "tamagui";

export const FolderDataNotFound = () => {
    return (
        <Stack flex={1} jc={"center"} ai={"center"} mt={20}>
            <Text fontSize={22} color={colors.primaryColor}>
                No Data Found
            </Text>
        </Stack>
    );
}