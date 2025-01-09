import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import linkedin from "@/assets/images/linkedin.png"

const Footer = () => {
    return (
        <Box bgcolor='rgb(17, 26,34)' py={5}>
            <Container >
                <Stack direction="row" justifyContent='center' gap={4}>
                    <Typography color="#fff" component={Link} href="/consultation">Consultation</Typography>
                    <Typography color="#fff" component={Link} href="/plan">Health Plans</Typography>
                    <Typography color="#fff" component={Link} href="/medicine">Medicine</Typography>
                    <Typography color="#fff" component={Link} href="/diagnostics">Diagnostics</Typography>
                    <Typography color="#fff" component={Link} href="/ngos">NGOS</Typography>
                </Stack>
                <Stack direction="row" py={3} justifyContent='center' gap={2}>
                    <Image src={linkedin} width={30} height={30} alt='linkedin' />
                    <Image src={linkedin} width={30} height={30} alt='linkedin' />
                    <Image src={linkedin} width={30} height={30} alt='linkedin' />
                    <Image src={linkedin} width={30} height={30} alt='linkedin' />
                </Stack>
                <div className='border-b'></div>

                <Stack direction="row" gap={2} justifyContent="space-between" ph={3}>
                    <Typography component="p" color='white' >&copy; 2025 Health care</Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;