import { baseAPI } from "./baseApi";

const specilitiesApi = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    createSpeciality: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        contentType: "multpart/form-data",
        data,
      }),
    }),
  }),
});

export const { useCreateSpecialityMutation } = specilitiesApi;
