import {apiSlice} from "../apiSlice";
export const aacApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    postAACSentence: builder.mutation<Sentence,Sentence>({
      query: ({ ...rest }) => ({
        url: `aac`,
        method: "POST",
        body: rest,
      }),
    }),
  })
})

export const { usePostAACSentenceMutation} = aacApiSlice;