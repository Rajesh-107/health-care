"use client"
import { getUserInfo, removeUser } from "@/services/actions/auth.service";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Navbar = () => {
    const userInfo = getUserInfo()
    console.log(userInfo)
    const router = useRouter()
    const handleLogout = () => {
        removeUser()
        router.refresh()

    }
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
                {userInfo?.userId ? (
                    <Button variant="outlined" color="error" onClick={handleLogout}>
                        Logout
                    </Button>
                ) : (
                    <Button component={Link} href="/login">
                        Login
                    </Button>
                )}

            </Stack>
        </Container >
    );
};

export default Navbar;