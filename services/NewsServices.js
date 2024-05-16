import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "@env";

export const newsApi = createApi({
  reducerPath: "topNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2/" }),
  endpoints: (builder) => ({
    getTopNewsForAllCategory: builder.query({
      query: () =>
        `top-headlines?country=us&pageSize=20&page=1&apiKey=${API_KEY}`,
    }),
  }),
});

export const { useGetTopNewsForAllCategoryQuery } = newsApi;
