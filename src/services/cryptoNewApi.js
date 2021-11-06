import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const header = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': process.env.BingHost,
  'x-rapidapi-key': process.env.BingKey,
};

const request = (url) => ({ url, headers: header });

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.BingNewsUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ newsCategory, count }) =>
        request(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
        ),
    }),
  }),
});
export const { useGetNewsQuery } = newsApi;

// var options = {
//     method: 'GET',
//     params: {safeSearch: 'Off', textFormat: 'Raw'},
//
//   };
