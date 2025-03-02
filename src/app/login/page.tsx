"use client"
import assets from '@/assets';
import PHForm from '@/components/Forms/PHForm';
import PHInput from '@/components/Forms/PHInput';
import { storeUserInfo } from '@/services/actions/auth.service';
import { loginPatient } from '@/services/actions/userLogin';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from 'sonner';

// export type FormValues = {
//     email: string,
//     password: string,
// };
const Login = () => {
    const router = useRouter()
    // const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>()
    const handleLogin = async (values: FieldValues) => {

        try {
            console.log("Submitting form with values:", values);

            const userInfo = await loginPatient(values);
            if (userInfo?.success) {

                toast.success(userInfo?.message);
                storeUserInfo({ accessToken: userInfo?.data?.accessToken })
                console.log("Login successful:", userInfo);
                router.push('/')


            } else {
                toast.error("Login failed. Please try again."); // Show error toast
            }
            console.log("Login successful:", userInfo); // Handle success
        } catch (err: any) {
            console.error("Login failed:", err.message); // Handle errors
        }

    }
    return (
        <Container>
            <Stack
                sx={{
                    height: '100vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        maxWidth: 600,
                        width: '100%',
                        boxShadow: 1,
                        borderRadius: 1,
                        p: 4,
                        textAlign: 'center',
                    }}
                >
                    <Stack
                        sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box>
                            <Image
                                src={assets.images.arrow}
                                width={50}
                                height={50}
                                alt='logo'
                            />
                        </Box>
                        <Box>
                            <Typography variant='h6' fontWeight={600}>
                                Login PH HealthCare
                            </Typography>
                        </Box>
                    </Stack>

                    {/* {error && ( */}
                    <Box>
                        <Typography
                            sx={{
                                backgroundColor: 'red',
                                padding: '1px',
                                borderRadius: '2px',
                                color: 'white',
                                marginTop: '5px',
                            }}
                        >

                        </Typography>
                    </Box>
                    {/* )} */}

                    <Box>
                        <PHForm
                            onSubmit={handleLogin}
                        // resolver={zodResolver(validationSchema)}
                        // defaultValues={{
                        //    email: '',
                        //    password: '',
                        // }}
                        >
                            <Grid container spacing={2} my={1}>
                                <Grid item md={6}>
                                    <PHInput

                                        label='Email'
                                        type='email'
                                        fullWidth={true}
                                        name='email'
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <PHInput

                                        label='Password'
                                        type='password'
                                        fullWidth={true}
                                        name='password'
                                    />
                                </Grid>
                            </Grid>

                            <Link href={'/forgot-password'}>
                                <Typography
                                    mb={1}
                                    textAlign='end'
                                    component='p'
                                    fontWeight={300}
                                    sx={{
                                        textDecoration: 'underline',
                                    }}
                                >
                                    Forgot Password?
                                </Typography>
                            </Link>

                            <Button
                                sx={{
                                    margin: '10px 0px',
                                }}
                                fullWidth={true}
                                type='submit'
                            >
                                Login
                            </Button>
                            <Typography component='p' fontWeight={300}>
                                Don&apos;t have an account?{' '}
                                <Link href='/register'>Create an account</Link>
                            </Typography>
                        </PHForm>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default Login;