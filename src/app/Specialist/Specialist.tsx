import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";


const Specialist = async () => {
    const res = await fetch("http://localhost:5100/api/v1/specialties", {
        next: {
            revalidate: 5
        }
    })
    const { data: spe } = await res.json()


    return (
        <Container>
            <Box sx={{
                margin: "40px 0px",
                textAlign: "center",

            }}>
                <Box sx={{
                    textAlign: "center",
                }}>
                    <Typography variant="h4" fontWeight={600}>Explore Treatment Across Specialties</Typography>
                    <Typography component="p" fontSize={18} fontWeight={300}>Lorem ipsum dolor sit, amet consectetur adipisicing.</Typography>
                </Box>
                <Stack direction="row" gap={4} mt={5}>
                    {spe.slice(0, 6).map((specility: any) => (
                        <Box key={specility.id} sx={{
                            flex: 1,
                            width: "150px",
                            backgroundColor: "rgba(245,245,245,1)",
                            border: "1px solid rgba(255,255,255, 1)",
                            borderRadius: "10px",
                            textAlign: "center",
                            padding: "40px 10px",
                            transition: "border 0.3s ease",
                            "& img": {
                                width: '50px',
                                height: '50px',
                                margin: "0 auto",
                            },
                            "&:hover": {
                                border: "1px solid blue",
                            },
                        }}
                        >
                            <Image src={specility.icon} height={100} width={100} alt="specility" />

                            <Box>
                                <Typography component="p" fontSize={18} fontWeight={300} mt={2}>{specility.title} </Typography>
                            </Box>
                        </Box>
                    ))}
                </Stack>
                <Button variant="outlined" sx={{
                    marginTop: "5px"
                }}> View All</Button>
            </Box>
        </Container >
    );
};

export default Specialist;