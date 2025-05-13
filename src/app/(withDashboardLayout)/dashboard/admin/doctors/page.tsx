'use client'
import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import DoctorModal from './components/DoctorModal';

const Doctors = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <Box>
            <Stack alignItems='center' direction="row" justifyContent='space-between'>
                <Button>Create New Doctor</Button>
                <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
                <TextField size='small' placeholder='search doctors' />
            </Stack>
        </Box>
    );
};

export default Doctors;