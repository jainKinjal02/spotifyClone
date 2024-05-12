import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const spotifyCoreApi = createApi({
    reducerPath: 'spotifyCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers)=>{
            headers.set('X-RapidAPI-Key',"2ed219413cmshaf8e08c1bd8daf9p1eef38jsn5c1e93cea9ac")

            return headers;
        }
    }),
    endpoints: (builder) =>({
        getTopSections: builder.query({
            query: (country_code) => `charts/country?country_code=${country_code}` 
        })
    })
});

export const {
    useGetTopSectionsQuery,
} = spotifyCoreApi;

