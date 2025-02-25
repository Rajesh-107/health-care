import { getUserInfo, removeUser } from '@/services/actions/auth.service';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AuthButton = () => {
    const userInfo = getUserInfo()
    console.log(userInfo)
    const router = useRouter()
    const handleLogout = () => {
        removeUser()
        router.refresh()

    }
    return (
        <>
            {userInfo?.userId ? (
                <Button variant="outlined" color="error" onClick={handleLogout}>
                    Logout
                </Button>
            ) : (
                <Button component={Link} href="/login">
                    Login
                </Button>
            )}
        </>
    );
};

export default AuthButton;