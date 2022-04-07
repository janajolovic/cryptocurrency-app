import { createApi, fetchBaseQuery } from "@reduxjs/toolkit";

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '8f28d0978dmsh35ce0c1fd2bbd76p10b991jsn7ffa2b1943d5'
}

const BaseUrl = 'coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: "crypto",
    baseQuery: fetchBaseQuery({ BaseUrl }),
    endpoints: (builder) => {
        getCrypytos: builder.query({
            query: () => createRequest('/exchanges') 
        })
    }
})