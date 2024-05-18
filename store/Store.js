import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "../services/NewsServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import topNewsReducer from "../services/NewsSlice";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    topNewses: topNewsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

setupListeners(store.dispatch);
