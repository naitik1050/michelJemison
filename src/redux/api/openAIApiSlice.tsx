import {apiSlice} from "../apiSlice";
// const apiWithTag = apiSlice.enhanceEndpoints({addTagTypes: ['Sentence']})
export const openAIApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postSpeechAIQuery: builder.mutation<Sentence,Sentence>({
            query: ({ ...rest }) => ({
                url: `open_ai/speech`,
                method: "POST",
                body: rest,
            })
        }),
        postSuggestionAIQuery: builder.mutation<OpenAI_SuggestionsResponse[],OpenAI_SuggestionsRequest[]>({
            query: (dataList: OpenAI_SuggestionsRequest[]) => ({
                url: `open_ai/suggestion`,
                method: "POST",
                body: dataList,
            })
        }),
        postImageAIQuery: builder.mutation<OpenAI_ImageResponse,string>({
            query: (body:string) => ({
                url: `open_ai/image`,
                method: "POST",
                body
            })
        }),
    })
})

export const { usePostSpeechAIQueryMutation,usePostSuggestionAIQueryMutation,usePostImageAIQueryMutation} = openAIApiSlice;