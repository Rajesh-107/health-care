import { Box, Divider, List, ListItem, ListItemButton, Toolbar, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import assets from "@/assets";
import Image from "next/image";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import { getUserInfo } from "@/services/actions/auth.service";
import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";
import Link from "next/link";
const Sidebar = () => {
    const [userRole, setUserRole] = useState("");

    useEffect(() => {
        const { role } = getUserInfo() as any;
        setUserRole(role);
    }, []);

    return (
        <Box>
            <Stack
                sx={{
                    py: 1,
                    mt: 1,
                }}
                direction="row"
                justifyContent="center"
                alignItems="center"
                gap={1}
                component={Link}
                href="/"
            >
                <Image src={assets.images.arrow} width={40} height={40} alt="logo" />
                <Typography
                    variant="h6"
                    component="h1"
                    sx={{
                        cursor: "pointer",
                    }}
                >
                    PH Health Care
                </Typography>
            </Stack>
            <List>
                {drawerItems(userRole as UserRole).map((item, index) => (
                    <SidebarItem key={index} item={item} />
                ))}
            </List>
        </Box>
    );
};


export default Sidebar;