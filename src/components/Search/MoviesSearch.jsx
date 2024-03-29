import { Box, Pagination, TextField, Typography } from "@mui/material";
import MovieCard from "../MovieList/MovieCard";
import { useState, useEffect } from "react";
import useMovies from "../../hooks/useMovies";

export default function MoviesSearch() {
    const [input, setInput] = useState("");

    const { data, searchMovie } = useMovies();
    const [page, setPage] = useState(1);

    useEffect(() => {
        searchMovie(input, page);
    }, [input, page]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                height="100%"
                m={3}
            >
                <Typography textAlign="center">
                    Enter movie title bellow
                </Typography>
                <TextField
                    sx={{
                        width: "90%",
                        maxWidth: "700px",
                        m: 2,
                        color: "white",
                    }}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    variant="outlined"
                    color="primary"
                    focused
                    inputProps={{
                        sx: {
                            color: "#a31f40",
                        },
                    }}
                />
            </Box>
            {!data.results || data.results.length === 0 ? (
                <Box height="100%" p={5} display="flex" justifyContent="center">
                    <Typography>
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
                            {data.results.map((movie) =>
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
                        <Box my={3}>
                            <Pagination
                                sx={{ button: { color: "#ffffff" } }}
                                count={data.total_pages}
                                color="primary"
                                page={page}
                                onChange={handleChange}
                            />
                        </Box>
                    </Box>
                </>
            )}
        </>
    );
}
