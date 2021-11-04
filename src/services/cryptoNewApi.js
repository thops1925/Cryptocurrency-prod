import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const header = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': 'b3ab83e703msh6b8609b2f8fe407p1590f4jsnd344db2af170',
};
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const request = (url) => ({ url, headers: header });

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
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
