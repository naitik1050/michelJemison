import {apiSlice} from "../apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loggedInUser: builder.query<UserDTO, void>({
            query: () => ({
                url: "user",
            }),
        }),
        deleteUser: builder.mutation({
            query: (body: { email: string; password: string }) => {
                return {
                    url: "user",
                    method: "DELETE",
                    body,
                };
            },
        })
    })
})

export const { useLoggedInUserQuery, useDeleteUserMutation} = userApiSlice;
