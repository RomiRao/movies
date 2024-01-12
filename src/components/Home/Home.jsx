import { Box } from "@mui/material";
import MovieSmallList from "./MovieSmallList";

export default function Home() {
    return (
        <>
            <h1>Carrousel</h1>
            <Box
                padding={8}
                sx={{
                    display: { sx: "block", sm: "block", md: "flex" },
                    justifyContent: "space-around",
                }}
            >
                <MovieSmallList title="Popular movies" />
                <MovieSmallList title="Best rated movies" />
            </Box>
        </>
    );
}
