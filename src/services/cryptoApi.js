import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeader = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'b3ab83e703msh6b8609b2f8fe407p1590f4jsnd344db2af170',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeader });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: () => createRequest('/coins'),
    }),
  }),
});

export const { useGetCryptoQuery } = cryptoApi;

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
