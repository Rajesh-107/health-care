'use client'
import PHfileUploader from '@/components/Forms/PHfileUploader';
import PHForm from '@/components/Forms/PHForm';
import PHInput from '@/components/Forms/PHInput';
import PHModal from '@/components/Shared/PhModal/PHModal';
import { Button, Grid, TextField } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SpecialitiesModal = ({ open, setOpen }: TProps) => {
    const handleFormSUbmit = (values: FieldValues) => {

    }
    return (
        <PHModal open={open} setOpen={setOpen} title="Create new speciality">
            <PHForm onSubmit={handleFormSUbmit}>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <PHInput name="title" />
                    </Grid>
                    <Grid item md={6}>
                        <PHfileUploader name='file' label='Upload File' />
                    </Grid>
                </Grid>
                <Button sx={{ mt: 1 }}>
                    Create
                </Button>
            </PHForm>
        </PHModal>
    );
};

export default SpecialitiesModal;