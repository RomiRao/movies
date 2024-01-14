import { Pagination, Typography, Box } from "@mui/material";

export default function MovieList() {
    return (
        <>
            <Typography>title</Typography>
            <Box>movies</Box>
            <Box>
                <Pagination count={10} color="primary" />
            </Box>
        </>
    );
}
