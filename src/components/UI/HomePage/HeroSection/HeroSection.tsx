import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import assets from '@/assets';

const HeroSection = () => {
    return (
        <Container sx={{
            display: 'flex',
            direction: 'row',
            my: 16
        }}>
            <Box sx={{
                flex: 1,
                position: 'relative',
            }}>
                <Box sx={{
                    position: 'absolute',
                    width: "700px",
                    top: "-90px",
                    left: "-120px",
                }}>
                    <Image src={assets.images.heroImg} alt="grid" />
                </Box>
                <Typography fontWeight={600} variant='h3' component='h1'>Healthier Hearths</Typography>
                <Typography variant='h3' component='h1'>Comes From</Typography>
                <Typography color='primary.main' variant='h3' component='h1'>Preventive Care</Typography>
                <Typography variant='h6' component='h6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus possimus atque, tenetur vitae minus hic libero nulla earum saepe ratione deleniti, porro qui eveniet corrupti quaerat, nesciunt accusantium ad? Porro.</Typography>
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                }}>
                    <Button >Make Appointment</Button>
                    <Button variant='outlined' >Contact Us</Button>
                </Box>
            </Box>
            <Box sx={{
                p: 1,
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                mt: 0

            }}>

                <Box sx={{
                    position: 'absolute',
                    left: '200px',
                    top: '-30px',
                }}>
                    <Image width={100} height={100} src={assets.images.arrow} alt='arrow' />

                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                }}>
                    <Box mt={4}>
                        <Image width={240} height={380} src={assets.images.doctor1} alt='doctor1' />
                    </Box>
                    <Box>
                        <Image width={240} height={350} src={assets.images.doctor2} alt='doctor2' />
                    </Box>

                </Box>
                <Box sx={{
                    position: 'absolute',
                    top: '220px',
                    left: '150px'
                }}>
                    <Image width={240} height={240} src={assets.images.doctor3} alt='doctor3' />
                </Box>
                <Box sx={{
                    position: 'absolute',
                    bottom: '-50px',
                    zIndex: '-1',
                    right: 0,
                }}>
                    <Image width={140} height={140} src={assets.images.Stetoscope} alt='doctor3' />
                </Box>
            </Box>
        </Container>
    );
};

export default HeroSection;