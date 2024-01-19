import { Box, Pagination, TextField, Typography } from "@mui/material";
import MovieCard from "../MovieList/MovieCard";
import { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";
import useMovies from "../../hooks/useMovies";

export default function MoviesSearch() {
    const [input, setInput] = useState("");

    const { data, searchMovie } = useMovies();

    useEffect(() => {
        searchMovie(input);
    }, [input]);

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                m={3}
            >
                <Typography textAlign="center">
                    Enter movie title bellow
                </Typography>
                <TextField
                    sx={{ width: "90%", maxWidth: "700px", m: 2 }}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </Box>
            {data.length === 0 ? (
                <Box
                    padding={23}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <BarLoader
                        color="#E47861"
                        size={150}
                        aria-label="Loading Spinner"
                    />
                    <Typography color="#E47861" mt={3}>
                        The movie you are looking for doesn't exist. Please
                        enter another title.
                    </Typography>
                </Box>
            ) : (
                <>
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
                            {data.map((movie) =>
                                movie.poster_path ? (
                                    <MovieCard
                                        key={movie.id}
                                        title={movie.title}
                                        img={movie.poster_path}
                                        id={movie.id}
                                    />
                                ) : null
                            )}
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
