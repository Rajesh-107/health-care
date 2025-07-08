'use client'

import { Box, Button, IconButton } from '@mui/material';
import ScheduleModal from './components/ScheduleModal';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { ISchedule } from '@/types/schedule/index';
import { useDeleteScheduleMutation, useGetAllSchedulesQuery } from '@/redux/api/scheduleApi';

import { dateFormatter } from '@/utils/dateFormatter';
import dayjs from 'dayjs';
import { toast } from 'sonner';

const SchedulePage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [allSchedule, setAllSchedule] = useState<any[]>([]);
    const { data, isLoading } = useGetAllSchedulesQuery({});
    const [deleteSchedule, { isLoading: isDeleting }] = useDeleteScheduleMutation();

    const schedules = data?.schedules;

    useEffect(() => {
        if (schedules && schedules.length) {
            const updateData = schedules.map((schedule: ISchedule, index: number) => {
                return {
                    sl: index + 1,
                    id: schedule.id,
                    startDate: dateFormatter(schedule.startDate),
                    endDate: dateFormatter(schedule.endDate),
                    startTime: dayjs(schedule.startDate).format('hh:mm a'),
                    endTime: dayjs(schedule.endDate).format('hh:mm a'),
                };
            });
            setAllSchedule(updateData);
        }
    }, [schedules]);
    const handleDelete = async (id: string) => {
        try {
            await deleteSchedule(id).unwrap();
            toast.success("Deleted successfully");
            setAllSchedule(prev => prev.filter(schedule => schedule.id !== id));
        } catch (error) {
            console.error('Failed to delete schedule:', error);
        }
    };
    const columns: GridColDef[] = [
        { field: 'sl', headerName: 'SL', width: 70 },
        { field: 'startDate', headerName: 'Date', flex: 1 },
        { field: 'startTime', headerName: 'Start Time', flex: 1 },
        { field: 'endTime', headerName: 'End Time', flex: 1 },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: ({ row }) => (
                <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(row.id)}
                    disabled={isDeleting}
                >
                    <DeleteIcon />
                </IconButton>
            ),
        },
    ];

    return (
        <Box>
            <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
            <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
            {!isLoading ? (
                <Box my={2} style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={allSchedule} columns={columns} />
                </Box>
            ) : (
                <h1>Loading.....</h1>
            )}
        </Box>
    );
};

export default SchedulePage;
