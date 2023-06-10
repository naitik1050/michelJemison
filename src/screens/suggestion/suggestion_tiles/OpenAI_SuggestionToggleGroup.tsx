import { styled, ToggleGroup } from "tamagui";
import { OpenAI_SuggestionTile } from "./OpenAI_SuggestionTile";
import { Control, Controller, FieldValues } from "react-hook-form";

interface Props {
    openAI_SuggestionsResponse: OpenAI_SuggestionsResponse;
    index: number;
    control: Control<FieldValues, any>;
}

export const OpenAI_SuggestionToggleGroup = ({ openAI_SuggestionsResponse, index, control }: Props) => {
    return (
        <Controller
            control={control}
            name={openAI_SuggestionsResponse.subject}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => {
                const currentValue = value || []; // Add this line to provide a default value

                return (
                    <ToggleGroup
                        orientation="horizontal"
                        id={`${index}${openAI_SuggestionsResponse.subject}`}
                        type="multiple"
                        columnGap={10}
                        rowGap={10}
                        onValueChange={(value: string[]) => {
                            onChange(value);
                        }}
                    >
                        {openAI_SuggestionsResponse.response.map((res, index) => (
                            <OpenAI_SuggestionTile res={res} key={index} isActive={currentValue.includes(res)} /> // Use currentValue here
                        ))}
                    </ToggleGroup>
                );
            }} // Close the render function here
        />
    );
};
