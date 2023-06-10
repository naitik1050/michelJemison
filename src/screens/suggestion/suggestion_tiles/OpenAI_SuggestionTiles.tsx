import {YStack} from "tamagui";
import React, {useEffect} from "react";
import {OpenAI_SuggestionToggleGroup} from "./OpenAI_SuggestionToggleGroup";
import {Control, FieldValues} from "react-hook-form";


export const OpenAI_SuggestionTiles = (
    {control}:{ control: Control<FieldValues, any>}
) => {
    const suggestions = [{
        //TODO: check activity response for some reason merged res
        "response": ["fish", "tuna", "salmon", "sardine", "seafood", "milk", "cheese"],
        "subject": "activity"
    }, {
        "response": ["Phở (noodle soup)", "Bánh mì (sandwich)", "Gỏi cuốn (spring rolls)", "Bánh xèo (crispy pancake)", "Cá kho tộ (braised catfish)", "Chả giò (fried spring rolls)", "Bánh cuốn (steamed rice rolls)"],
        "subject": "edible"
    }, {
        "response": ["Sushi ", "Tacos ", "Pasta ", "Steak ", "Curry ", "Pizza ", "Seafood "],
        "subject": "other"
    }];
    // const suggestions = useAppSelector(selectSuggestions);
    useEffect(() => {
        console.log(suggestions, "SUGESTIONES")
    })
    return (
        <YStack
            paddingVertical={10}
        >
                {suggestions && suggestions.map((suggestion, index) => (
                    <OpenAI_SuggestionToggleGroup
                        key={index + `${suggestion}` }
                        openAI_SuggestionsResponse={suggestion}
                        index={index}
                        control={control}
                    />
                ))}
        </YStack>
    )
}