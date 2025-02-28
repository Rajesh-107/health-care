"use client"
import assets from '@/assets';
import { storeUserInfo } from '@/services/actions/auth.service';
import { registerPatient } from '@/services/actions/registerPatient';
import { loginPatient } from '@/services/actions/userLogin';
import { modifyPayload } from '@/utils/modifyPayload';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from 'sonner';


interface IPatientData {
    name: string,

    email: string,
    contactNumber: string,
    address: string,

}

interface IPatientRegisterFormData {
    password: string,
    patient: IPatientData
}

const Register = () => {
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IPatientRegisterFormData>();
    const onSubmit: SubmitHandler<IPatientRegisterFormData> = async (values) => {
        const data = modifyPayload(values)

        console.log(data)
        try {
            const res = await registerPatient(data)
            if (res?.data?.id) {
                toast.success(res?.message)
                const userInfo = await loginPatient({ password: values.password, email: values.patient.email });
                if (userInfo?.success) {

                    toast.success(userInfo?.message);
                    storeUserInfo({ accessToken: userInfo?.data?.accessToken })
                    console.log("Login successful:", userInfo);
                    router.push('/')


                }
            }
            console.log(res)
        } catch (err: any) {
            console.error(err.message)
        }


    }
    return (
        <Container >
            <Stack sx={{
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{
                        maxWidth: '600',
                        width: "100%",
                        boxShadow: 1,
                        borderRadius: 1,
                        padding: 4,
                        textAlign: 'center'
                    }}>
                        <Stack sx={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Box>
                                <Image src={assets.images.arrow} width={50} alt='logo' />
                            </Box>
                            <Box>
                                <Typography variant='h6' fontWeight={600}>
                                    Patient Register
                                </Typography>
                            </Box>
                        </Stack>
                        <Box>
                            <Grid container spacing={3} my={1}>
                                <Grid item md={12}>
                                    <TextField id="outlined-basic" label="Name" variant="outlined" size='small' fullWidth={true}
                                        {...register('patient.name')}
                                    />

                                </Grid>
                                <Grid item md={6}>
                                    <TextField id="outlined-basic" label="email" type="email" variant="outlined" size='small' fullWidth={true}
                                        {...register('patient.email')} />

                                </Grid>
                                <Grid item md={6}>
                                    <TextField id="outlined-basic" label="password" type="password" variant="outlined" size='small' fullWidth={true}    {...register('password')} />

                                </Grid>
                                <Grid item md={6}>
                                    <TextField id="outlined-basic" label="Contact Number" type="phone" variant="outlined" size='small' fullWidth={true}  {...register('patient.contactNumber')} />

                                </Grid>
                                <Grid item md={6}>
                                    <TextField id="outlined-basic" label="Address" type="text" variant="outlined" size='small' fullWidth={true} {...register('patient.address')} />

                                </Grid>
                            </Grid>
                            <Button
                                sx={{
                                    margin: "10px 0px",
                                }}
                                fullWidth={true}
                                type="submit"
                            >
                                Register
                            </Button>
                            <Typography component='p' fontWeight={300}>
                                Do you already have an account? <Link href="/login">Login </Link>
                            </Typography>
                        </Box>
                    </Box>
                </form>
            </Stack>
        </Container>
    );
};

export default Register;