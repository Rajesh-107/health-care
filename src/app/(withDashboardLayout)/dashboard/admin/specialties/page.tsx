
'use client'
import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import SpecialitiesModal from "./components/SpecialitiesModal"
const SpecialtiesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <Box>
            <Stack alignItems='center' direction="row" justifyContent='space-between'>
                <Button onClick={() => setIsModalOpen(true)}>
                    Create Specialty
                </Button>
                <SpecialitiesModal open={isModalOpen} setOpen={setIsModalOpen} />
                <TextField size='small' placeholder='Search' />
            </Stack>
        </Box>
    );
};

export default SpecialtiesPage;