import { apiSlice } from "../apiSlice";
import { CustomWordDTO, TileImagePartial } from "../../@types/model_";

const apiWithTag = apiSlice.enhanceEndpoints({
  addTagTypes: ["CustomWord"],
});

export const customWordApiSlice = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    postCustomWordMutation: builder.mutation<void, FormData>({
      async queryFn(formData, _queryApi, _extraOptions, fetchWithBQ) {
        const response = await fetchWithBQ({
          url: "custom_word",
          method: "POST",
          body: formData,
        });
        if (response.error) throw response.error;
        return { data: undefined };
      },
      invalidatesTags: ["CustomWord"],
    }),
    postCustomWordBulkMutation: builder.mutation<void, FormData>({
      async queryFn(formData, _queryApi, _extraOptions, fetchWithBQ) {
        const response = await fetchWithBQ({
          url: "custom_word/bulk-create",
          method: "POST",
          body: formData,
        });
        if (response.error) throw response.error;
        return { data: undefined };
      },
      invalidatesTags: ["CustomWord"],
    }),
    getCustomWordsByUser: builder.query<CustomWordDTO[], void>({
      query: () => ({
        url: "custom_word",
      }),
      providesTags: ["CustomWord"],
    }),
  }),
});

export const { useGetCustomWordsByUserQuery, usePostCustomWordMutationMutation,usePostCustomWordBulkMutationMutation } = customWordApiSlice;
