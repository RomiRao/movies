import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { FaCirclePlay } from "react-icons/fa6";
import styles from "./MovieDetail.module.css";
import { useEffect } from "react";
import useMovies from "../../hooks/useMovies";
import { useParams } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";

export default function MovieDetail() {
    const { data, getMovie } = useMovies();

    let { id } = useParams();

    useEffect(() => {
        getMovie(id);
    }, []);

    return (
        <>
            {data?.title ? (
                <Box
                    display="flex"
                    justifyContent="center"
                    sx={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            width: "100%",
                            padding: 15,
                            color: "white",
                            flexWrap: "wrap",
                        }}
                    >
                        <img
                            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                            style={{ width: "270px", marginRight: "100px" }}
                        />
                        <Box sx={{ width: "55%" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    mb: 8,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-end",
                                    }}
                                >
                                    <Typography variant="h4" mr="4px">
                                        {data.title}
                                    </Typography>
                                    <Typography variant="h6" component="span">
                                        {data.release_date.slice(0, 4)}
                                    </Typography>
                                </Box>
                                <Button
                                    className={styles.link}
                                    startIcon={<FaCirclePlay />}
                                    sx={{ color: "white" }}
                                >
                                    Trailer
                                </Button>
                            </Box>
                            <Typography variant="h6">Sinopsis</Typography>
                            <Typography variant="body2" mb={2}>
                                {data.overview}
                            </Typography>
                            <Typography variant="h6">Genres</Typography>
                            <List>
                                {data.genres.map((genre) => (
                                    <ListItem key={genre.name}>
                                        <Typography>- {genre.name}</Typography>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </Box>
            ) : (
                <Box padding={40} display="flex" justifyContent="center">
                    <BarLoader
                        color="#E47861"
                        size={150}
                        aria-label="Loading Spinner"
                    />
                </Box>
            )}
        </>
    );
}
