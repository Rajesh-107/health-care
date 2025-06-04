'use client'
import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import DoctorModal from './components/DoctorModal';
import { useDeleteDoctorMutation, useGetAllDoctorsQuery } from '@/redux/api/doctorAPI';
import { DataGrid, GridColDef, GridDeleteIcon } from '@mui/x-data-grid';
import { useDebounced } from '@/redux/hooks';
import { toast } from 'sonner';

const Doctors = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const query: Record<string, any> = {};
    const [searchTerm, setSearchTerm] = useState("");
    query["searchTerm"] = searchTerm
    const { data, isLoading, error } = useGetAllDoctorsQuery({ ...query });

    const [deleteDoctor] = useDeleteDoctorMutation();

    const debouncedTerm = useDebounced({ searchQuery: searchTerm, delay: 600 })

    if (!!debouncedTerm) {
        query['searchTerm'] = searchTerm
    }


    // console.log(data);
    const doctors = data?.doctors;
    const meta = data?.meta;
    const handleDelete = async (id: string) => {
        // console.log("Delete doctor with id:", id);
        // You can call a delete mutation here
        try {
            const res = await deleteDoctor(id).unwrap()
            console.log(res)
            if (res?.id) {
                toast.success("Deleted successfully")
            }
        } catch (err: any) {
            console.error(err.message)
        }
    };

    const columns: GridColDef[] = [
        { field: "name", headerName: "Name", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "contactNumber", headerName: "Contact Number", flex: 1 },
        { field: "gender", headerName: "Gender", flex: 1 },
        { field: "apointmentFee", headerName: "Appointment Fee", flex: 1 },
        {
            field: "action",
            headerName: "Action",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => {
                return (
                    <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
                        Delete
                    </IconButton>
                );
            },
        },
    ];
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button onClick={() => setIsModalOpen(true)}>Create New Doctor</Button>
                <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
                <TextField
                    onChange={(e) => setSearchTerm(e.target.value)}
                    size="small"
                    placeholder="search doctors"
                />
            </Stack>
            {!isLoading ? (
                <Box my={2}>
                    <DataGrid rows={doctors} columns={columns} />
                </Box>
            ) : (
                <h1>Loading.....</h1>
            )}
        </Box>
    );
};

export default Doctors;