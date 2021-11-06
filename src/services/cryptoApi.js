import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeader = {
  'x-rapidapi-host': process.env.HostRapid,
  'x-rapidapi-key': process.env.Key,
};

const createRequest = (url) => ({ url, headers: cryptoApiHeader });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.CoinUrl }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`/coin/${coinId}/history/${timeperiod}`),
    }),
    getExchange: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});

export const {
  useGetCryptoQuery,
  useGetCryptoDetailsQuery,
  useGetHistoryQuery,
  useGetExchangeQuery,
} = cryptoApi;

// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   headers: {
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
