import {
    Box,
    Button,
    Container,
    IconButton,
    List,
    ListItem,
    Modal,
    Typography,
} from "@mui/material";
import { FaCirclePlay, FaHeart, FaRegHeart } from "react-icons/fa6";
import styles from "./MovieDetail.module.css";
import { useEffect, useContext, useState } from "react";
import useMovies from "../../hooks/useMovies";
import BarLoader from "react-spinners/BarLoader";
import { FavoritesContext } from "../../context/FavoritesContext";
import { useParams } from "react-router-dom";
import { ImCross } from "react-icons/im";

export default function MovieDetail() {
    const { addFavs, delFavs, isFavs } = useContext(FavoritesContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { data, getMovie, getVideo, video } = useMovies();

    let { id } = useParams();

    useEffect(() => {
        getMovie(id);
        getVideo(id);
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
                                <Box>
                                    {isFavs(data.id) ? (
                                        <IconButton
                                            onClick={(e) => delFavs(e, data.id)}
                                        >
                                            <FaHeart color="red" />
                                        </IconButton>
                                    ) : (
                                        <IconButton
                                            onClick={(e) =>
                                                addFavs(e, {
                                                    title: data.title,
                                                    img: data.poster_path,
                                                    id: data.id,
                                                })
                                            }
                                        >
                                            <FaRegHeart color="red" />
                                        </IconButton>
                                    )}
                                    <Button
                                        className={styles.link}
                                        startIcon={<FaCirclePlay />}
                                        sx={{ color: "white" }}
                                        onClick={handleOpen}
                                    >
                                        Trailer
                                    </Button>
                                </Box>
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
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-trailer"
                        aria-describedby="modal-modal-description"
                    >
                        <Container
                            sx={{
                                mt: 3,
                            }}
                        >
                            <IconButton
                                sx={{ display: "block" }}
                                onClick={handleClose}
                            >
                                <ImCross color="white" />
                            </IconButton>
                            {video && video.length > 0 ? (
                                <iframe
                                    width="100%"
                                    height="600px"
                                    src={`https://www.youtube.com/embed/${video[0].key}`}
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <Typography variant="body2">
                                    No trailer available
                                </Typography>
                            )}
                        </Container>
                    </Modal>
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
