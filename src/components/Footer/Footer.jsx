import { Box, Typography } from "@mui/material";
import { MdLocalMovies } from "react-icons/md";

export default function Footer() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ backgroundColor: "#555166", padding: 3, color: "white" }}
        >
            <MdLocalMovies />
            <Typography mx={1}>Movie app</Typography>
        </Box>
    );
}