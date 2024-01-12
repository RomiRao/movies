import { Box } from "@mui/material";
import MovieSmallList from "./MovieSmallList";

export default function Home() {
    return (
        <>
            <h1>Carrousel</h1>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                <MovieSmallList title="Popular movies" />
                <MovieSmallList title="Best rated movies" />
            </Box>
        </>
    );
}
