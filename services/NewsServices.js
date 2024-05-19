import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "@env";

export const newsApi = createApi({
  reducerPath: "topNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2/" }),
  endpoints: (builder) => ({
    getTopNewsForAllCategory: builder.query({
      query: ({ limit = 10, start = 1, country = "us", category = "" }) =>
        `top-headlines?country=${country}&pageSize=${limit}&page=${start}&apiKey=${API_KEY}`,
    }),
    getBreakingNewsForAllCategory: builder.query({
      query: ({ limit = 10, start = 1 }) =>
        `top-headlines?sources=bbc-news&pageSize=${limit}&page=${start}&apiKey=${API_KEY}`,
    }),
    getPublisherWiseNews: builder.query({
      query: (name) => `top-headlines?sources=${name}&apiKey=${API_KEY}`,
    }),
  }),
});

export const {
  useGetTopNewsForAllCategoryQuery,
  useGetBreakingNewsForAllCategoryQuery,
  useGetPublisherWiseNewsQuery,
  useGet,
} = newsApi;
