import { Box } from "@mui/material";
import MovieSmallList from "./MovieSmallList";
import Carrousel from "./Carrousel";

export default function Home() {
    return (
        <>
            <Carrousel />
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
