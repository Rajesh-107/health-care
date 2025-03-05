import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseAPI = createApi({
  reducerPath: "api/reducer",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5100/api/v1" }),
  endpoints: (build) => ({}),
});
