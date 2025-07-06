import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { SxProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';


interface IDatePicker {
    name: string;
    size?: "small" | "medium";
    label?: string;
    required?: boolean;
    fullWidth?: boolean;
    sx?: SxProps;
}

export default function PHDatePicker({
    name,
    size = "small",
    label,
    required,
    fullWidth = true,
    sx,
}: IDatePicker) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={dayjs(new Date().toDateString())}
            render={({ field: { onChange, value, ...field }, fieldState }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        {...field}
                        timezone="system"
                        disablePast
                        onChange={(date) => onChange(date)}
                        value={value || dayjs()}
                        slotProps={{
                            textField: {
                                fullWidth,
                                size,
                                required,
                                label,
                                error: !!fieldState.error,
                                helperText: fieldState.error?.message,
                                sx: {
                                    borderRadius: 2,
                                    backgroundColor: "#f9f9f9",
                                    "& .MuiInputBase-root": {
                                        paddingRight: "10px",
                                    },
                                    ...sx,
                                },
                            },
                        }}
                    />
                </LocalizationProvider>
            )}
        />
    );
}