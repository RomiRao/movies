import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Box, Pagination, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import { BarLoader } from "react-spinners";

export default function FavoritesList() {
    const { favorites } = useContext(FavoritesContext);

    return (
        <>
            {favorites.length === 0 ? (
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
                    <Box display="flex" p={3} flexWrap="wrap">
                        {favorites.map((movie) => (
                            <MovieCard
                                key={movie.title}
                                title={movie.title}
                                img={movie.img}
                                id={movie.id}
                            />
                        ))}
                    </Box>
                    <Box>
                        <Pagination count={10} color="primary" />
                    </Box>{" "}
                </>
            )}
        </>
    );
}
