import { Box, Container, Typography } from "@mui/material";


const Specialist = () => {
    return (
        <Container>
            <Box sx={{
                margin: "40px 0px",
                textAlign: "center",

            }}>
                <Box sx={{
                    textAlign: "start",
                }}>
                    <Typography variant="h4" fontWeight={600}>Explore Treatment Across Specialties</Typography>
                    <Typography component="p" fontSize={18} fontWeight={300}>Lorem ipsum dolor sit, amet consectetur adipisicing.</Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Specialist;