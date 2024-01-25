import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Box, Pagination, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import { BarLoader } from "react-spinners";

export default function FavoritesList() {
    const { favorites } = useContext(FavoritesContext);
    const [page, setPage] = useState(1);
    const itemsPerPage = 20;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const fmovies = favorites.slice(startIndex, endIndex);
        setMovies(fmovies);
    }, [page, favorites]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            {movies.length === 0 ? (
                <Box
                    padding={35}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <BarLoader
                        color="#E47861"
                        size={150}
                        aria-label="Loading Spinner"
                    />
                    <Typography color="#E47861" mt={4}>
                        Loading, please wait, if it doen't change you might not
                        have any favorite movie. Click on each card's heart to
                        save here your favorites movies!
                    </Typography>
                </Box>
            ) : (
                <>
                    <Typography variant="h4" textAlign="center" m={4}>
                        Favorites
                    </Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                    >
                        <Box
                            display="flex"
                            maxWidth="87.5%"
                            p={3}
                            flexWrap="wrap"
                        >
                            {movies.map((movie) => (
                                <MovieCard
                                    key={movie.id}
                                    title={movie.title}
                                    img={movie.img}
                                    id={movie.id}
                                />
                            ))}
                        </Box>
                        <Box my={3}>
                            <Pagination
                                count={Math.ceil(
                                    favorites.length / itemsPerPage
                                )}
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
