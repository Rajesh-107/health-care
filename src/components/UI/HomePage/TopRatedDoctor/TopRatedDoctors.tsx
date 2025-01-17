import { Box, Typography } from "@mui/material";

const TopRatedDoctors = () => {
    return (
        <Box sx={{
            my: 10,
            py: 30,
            backgroundColor: "rgba(20,20,20,0.1)",
            clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)"
        }}>
            <Box
                sx={{
                    margin: "40px 0px",
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        textAlign: "start",
                    }}
                >
                    <Typography variant="h4" fontWeight={600}>
                        Explore Treatment Across Specialties
                    </Typography>
                    <Typography component="p" fontSize={18} fontWeight={300}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing.
                    </Typography>
                </Box>
            </Box>
        </Box>

    );
};

export default TopRatedDoctors;