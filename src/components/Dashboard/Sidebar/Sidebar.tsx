import { Box, Divider, List, ListItem, ListItemButton, Toolbar, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import assets from "@/assets";
import Image from "next/image";
const Sidebar = () => {
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
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