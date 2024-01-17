import { Pagination, Typography, Box } from "@mui/material";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import useMovies from "../Hooks/useMovies";

export default function MovieList({ title, fetch }) {
    const { data, getMovies } = useMovies();

    useEffect(() => {
        getMovies(fetch);
    }, []);

    return (
        <>
            <Typography variant="h4" textAlign="center" m={4}>
                {title}
            </Typography>
            <Box display="flex" p={3} flexWrap="wrap">
                {data.map((movie) => (
                    <MovieCard
                        key={movie.title}
                        title={movie.title}
                        img={movie.poster_path}
                    />
                ))}
            </Box>
            <Box>
                <Pagination count={10} color="primary" />
            </Box>
        </>
    );
}
