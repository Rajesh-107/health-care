import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

// Define a service using a base URL and expected endpoints
export const baseAPI = createApi({
  reducerPath: "api/reducer",
  baseQuery: axiosBaseQuery({ baseUrl: "http://localhost:5100/api/v1" }),
  endpoints: (build) => ({}),
  tagTypes: tagTypesList,
});
