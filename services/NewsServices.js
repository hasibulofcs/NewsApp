import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "@env";

export const newsApi = createApi({
  reducerPath: "topNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2/" }),
  endpoints: (builder) => ({
    getTopNewsForAllCategory: builder.query({
      query: (dataPerPage = 10) =>
        `top-headlines?country=us&pageSize=${dataPerPage}&page=1&apiKey=${API_KEY}`,
    }),
  }),
});

export const { useGetTopNewsForAllCategoryQuery } = newsApi;
