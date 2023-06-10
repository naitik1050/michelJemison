import {apiSlice} from "../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/auth/authenticate",
          method: "POST",
          body,
        };
      },
    }),
    registerUser: builder.mutation({
      query: (body: {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
      }) => {
        return {
          url: "/auth/register",
          method: "POST",
          body,
        };
      },
    }),
    refreshToken: builder.mutation({
      query: (body: any) => {
        return {
          url: "/auth/refresh",
          method: "POST",
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApiSlice;
