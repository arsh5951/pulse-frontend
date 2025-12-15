import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const AuthAPI = createApi({
  reducerPath: 'AuthAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/auth/' }),
  endpoints: (builder) => ({

   
login:builder.mutation({
    query:(body) =>({
        url:"/login",
        method:"POST",
        body:body
    })


})

    }),
  })

export const { useLoginMutation } = AuthAPI