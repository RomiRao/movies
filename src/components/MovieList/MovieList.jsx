import { Pagination, Typography, Box } from "@mui/material";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import useMovies from "../../hooks/useMovies";
import BarLoader from "react-spinners/BarLoader";

export default function MovieList({ title, fetch }) {
    const { data, getMovies } = useMovies();

    useEffect(() => {
        getMovies(fetch);
    }, [data]);

    return (
        <>
            {data.length === 0 ? (
                <Box padding={40} display="flex" justifyContent="center">
                    <BarLoader
                        color="#E47861"
                        size={150}
                        aria-label="Loading Spinner"
                    />
                </Box>
            ) : (
                <>
                    <Typography variant="h4" textAlign="center" m={4}>
                        {title}
                    </Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Box
                            display="flex"
                            p={3}
                            maxWidth="87.5%"
                            flexWrap="wrap"
                        >
                            {data.map((movie) => (
                                <MovieCard
                                    key={movie.id}
                                    title={movie.title}
                                    img={movie.poster_path}
                                    id={movie.id}
                                />
                            ))}
                        </Box>
                        <Box>
                            <Pagination count={10} color="primary" />
                        </Box>
                    </Box>
                </>
            )}
        </>
    );
}
