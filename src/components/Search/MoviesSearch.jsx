import { Box, TextField, Typography } from "@mui/material";
import MovieCard from "../MovieList/MovieCard";

export default function MoviesSearch() {
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                m={3}
            >
                <Typography textAlign="center">Search movie bellow</Typography>
                <TextField sx={{ width: "90%", maxWidth: "700px", m: 2 }} />
            </Box>
            <Box display="flex" p={3} flexWrap="wrap">
                <MovieCard>saasdas</MovieCard>
            </Box>
        </>
    );
}
