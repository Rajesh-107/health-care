"use client"

import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHSelectField from "@/components/Forms/PHSelectField";
import { useGetDoctorQuery, useUpdateDoctorMutation } from "@/redux/api/doctorAPI";
import { Gender } from "@/types";
import { modifyPayload } from "@/utils/modifyPayload";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
    params: {
        doctorId: string
    }
}
const DoctorUpdatePage = ({ params }: TParams) => {
    // console.log(params?.doctorId)


    // Mutation hook
    const { data: doctorData, isLoading } = useGetDoctorQuery(params?.doctorId);

    const handleFormSubmit = async (values: FieldValues) => {

        try {

        } catch (err: any) {
            console.error(err)
        }

    };
    const defaultValues = doctorData
        ? {
            email: doctorData.email || "",
            name: doctorData.name || "",
            contactNumber: doctorData.contactNumber || "",
            address: doctorData.address || "",
            registrationNumber: doctorData.registrationNumber || "",
            gender: doctorData.gender || "",
            experience: doctorData.experience || 0,
            apointmentFee: doctorData.apointmentFee || 0,
            qualification: doctorData.qualification || "",
            currentWorkingPlace: doctorData.currentWorkingPlace || "",
            designation: doctorData.designation || "",
            profilePhoto: doctorData.profilePhoto || "",
        }
        : {
            email: "",
            name: "",
            contactNumber: "",
            address: "",
            registrationNumber: "",
            gender: "",
            experience: 0,
            apointmentFee: 0,
            qualification: "",
            currentWorkingPlace: "",
            designation: "",
            profilePhoto: "",
        };
    return (
        <Box>
            <Typography component="h3">doctor update page</Typography>
            <PHForm onSubmit={handleFormSubmit} defaultValues={defaultValues}>
                <Grid container spacing={2} sx={{ my: 5 }}>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="name"
                            label="Name"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="email"
                            type="email"
                            label="Email"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>



                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="contactNumber"
                            label="Contract Number"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="address"
                            label="Address"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="registrationNumber"
                            label="Registration Number"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="experience"
                            type="number"
                            label="Experience"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHSelectField
                            items={Gender}
                            name="gender"
                            label="Gender"
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="apointmentFee"
                            type="number"
                            label="ApointmentFee"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="qualification"
                            label="Qualification"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="currentWorkingPlace"
                            label="Current Working Place"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <PHInput
                            name="designation"
                            label="Designation"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                </Grid>

                <Button type="submit">Update</Button>
            </PHForm>
        </Box>
    );
};

export default DoctorUpdatePage;