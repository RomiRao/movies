import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { FaCirclePlay } from "react-icons/fa6";
import styles from "./MovieDetail.module.css";
import { useEffect } from "react";
import useMovies from "../Hooks/useMovies";
import { useParams } from "react-router-dom";
import BarLoader from "react-spinners/BarLoader";

export default function MovieDetail() {
    const { data, getMovies } = useMovies();

    let { id } = useParams();

    useEffect(() => {
        getMovies(id);
    }, []);

    return (
        <>
            {data.title ? (
                <Box padding={40} display="flex" justifyContent="center">
                    <BarLoader
                        color="#E47861"
                        size={150}
                        aria-label="Loading Spinner"
                    />
                </Box>
            ) : (
                <Box
                    display="flex"
                    justifyContent="center"
                    sx={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.poster_path})`,
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
                            src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f154230aab3191aba977f337d392f812.jpe"
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
                                        Title movie
                                    </Typography>
                                    <Typography variant="h6" component="span">
                                        2023
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
                                Text
                            </Typography>
                            <Typography variant="h6">Genres</Typography>
                            <List>
                                <ListItem>Comedy</ListItem>
                            </List>
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    );
}
