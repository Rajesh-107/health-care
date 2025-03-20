import { Box, Divider, List, ListItem, ListItemButton, Toolbar, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import assets from "@/assets";
import Image from "next/image";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
const Sidebar = () => {
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {drawerItems("admin" as UserRole).map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </div>
    );
    return <Box>
        <Stack direction='row' alignItems='center' justifyContent='center'>
            <Image src={assets.images.Stetoscope} height={40} width={40} alt="logo" />
            <Typography component="h1" verient='h6'>Health Care</Typography>
        </Stack>
        {drawer}
    </Box>
};

export default Sidebar;