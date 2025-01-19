import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

const TopRatedDoctors = async () => {
    const res = await fetch("http://localhost:5100/api/v1/doctor?page=1&limit=3")
    const { data: doctors } = await res.json();
    return (
        <Box sx={{
            my: 10,
            py: 30,
            backgroundColor: "rgba(20,20,20,0.1)",
            clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)"
        }}>
            <Container
                sx={{
                    margin: "40px 0px",
                    textAlign: "start",
                }}
            >
                <Box
                    sx={{
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h4" fontWeight={600}>
                        Explore Treatment Across Specialties
                    </Typography>
                    <Typography component="p" fontSize={18} fontWeight={300}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </Typography>
                </Box>
            </Container>
            <Container sx={{
                margin: "30px auto"
            }}>
                <Grid container spacing={2}>
                    {doctors.map((doctor: any) => (
                        <Grid item key={doctor.id} md={4}>
                            <Card >
                                <Box>
                                    <Image
                                        height={100}
                                        width={500}

                                        src={doctor.profilePhoto}
                                        title="green iguana"
                                        alt="doctor"
                                    />
                                </Box>

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {doctor.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {doctor.designation}, {doctor.gender}, {doctor.contactNumber}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </Box >

    );
};

export default TopRatedDoctors;