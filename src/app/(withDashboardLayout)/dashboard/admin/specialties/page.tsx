
'use client'
import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import SpecialitiesModal from "./components/SpecialitiesModal"
import { useDeleteSpecialityMutation, useGetAllSpecialityQuery } from '@/redux/api/specialitiesApi';
import Image from 'next/image';
import { DataGrid, GridColDef, GridDeleteIcon } from '@mui/x-data-grid';
import { toast } from 'sonner';
const SpecialtiesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { data, isLoading, error } = useGetAllSpecialityQuery({});
    const [deleteSpeciality] = useDeleteSpecialityMutation({})
    const rows = data?.map((item: any, index: number) => ({
        id: item.id || index,
        icon: item.icon,
        title: item.title,
    })) || [];

    const handleDelete = async (id: string) => {
        try {
            const res = await deleteSpeciality(id).unwrap();
            console.log('Deleted:', id);
            if (res?.id) {
                toast.success("Deleted Succussefully")
            }
        } catch (err) {
            console.error('Delete failed:', err);
            toast.error("Not deleted")
        }
    };

    const columns: GridColDef[] = [
        {
            field: 'icon',
            headerName: 'Icon',
            width: 80,
            renderCell: (params) => (
                <Image
                    src={params.value}
                    alt="icon"
                    width={50}
                    height={50}
                    style={{ borderRadius: '8px' }}
                />
            ),
            sortable: false,
            filterable: false,
        },

        {
            field: 'title',
            headerName: 'Title',
            width: 200,
        },
        {
            field: 'Action',
            headerName: 'Action',
            width: 80,
            renderCell: (params) => (
                <IconButton onClick={() => handleDelete(params.row.id)} aria-label="delete">
                    <GridDeleteIcon />
                </IconButton>
            ),

        },
    ];


    return (
        <Box>
            <Stack alignItems='center' direction="row" justifyContent='space-between'>
                <Button onClick={() => setIsModalOpen(true)}>
                    Create Specialty
                </Button>
                <SpecialitiesModal open={isModalOpen} setOpen={setIsModalOpen} />
                <TextField size='small' placeholder='Search' />
            </Stack>
            <Box >
                <h1>Display Specialties</h1>
                <Box>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error loading data.</p>
                    ) : (
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: {
                                    paginationModel: { pageSize: 5, page: 0 },
                                },
                            }}
                            pageSizeOptions={[5, 10]}

                            sx={{ border: 0 }}
                        />

                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default SpecialtiesPage;