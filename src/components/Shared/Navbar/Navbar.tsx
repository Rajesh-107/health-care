"use client"

import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";



const Navbar = () => {
    const AuthButton = dynamic(() => import('@/components/UI/AuthButton/AuthButton'), { ssr: false })
    return (
        <Container>
            <Stack py={2} alignItems="center" direction="row" justifyContent="space-between">
                <Typography variant="h4" fontWeight={600} component={Link} href="/" >P<Box component="span" color="primary.main">H</Box> Health Care</Typography>

                <Stack direction="row" justifyContent="space-between" gap={4}>
                    <Typography component={Link} href="/consultation">Consultation</Typography>
                    <Typography component={Link} href="/plan">Health Plans</Typography>
                    <Typography component={Link} href="/medicine">Medicine</Typography>
                    <Typography component={Link} href="/diagnostics">Diagnostics</Typography>
                    <Typography component={Link} href="/ngos">NGOS</Typography>
                </Stack>

                <AuthButton />
            </Stack>
        </Container >
    );
};

export default Navbar;