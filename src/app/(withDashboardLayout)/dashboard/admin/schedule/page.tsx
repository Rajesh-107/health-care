'use client'
import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import ScheduleModal from './components/scheduleModal';

const SchedulePage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    return (
        <Box>
            <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
            <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen}></ScheduleModal>
            <Box my={5}>Display</Box>
        </Box>
    );
};

export default SchedulePage;