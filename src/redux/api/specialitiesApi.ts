import { tagTypes } from "../tag-types";
import { baseAPI } from "./baseApi";

const specilitiesApi = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    createSpeciality: build.mutation({
      query: (data: string) => ({
        url: "/specialties",
        method: "POST",
        contentType: "multpart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.specialities],
    }),
    getAllSpeciality: build.query({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      providesTags: [tagTypes.specialities],
    }),
    deleteSpeciality: build.mutation({
      query: (id: string) => ({
        url: `/specialties/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.specialities],
    }),
  }),
});

export const {
  useCreateSpecialityMutation,
  useGetAllSpecialityQuery,
  useDeleteSpecialityMutation,
} = specilitiesApi;
