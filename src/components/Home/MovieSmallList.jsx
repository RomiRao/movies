import {
    Avatar,
    Box,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import { useEffect } from "react";
import useMovies from "../../hooks/useMovies";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from "../../context/FavoritesContext";
import { useContext } from "react";

export default function MovieSmallList({ title, fetch }) {
    const { addFavs, delFavs, isFavs } = useContext(FavoritesContext);
    const navigate = useNavigate();

    const { data, getData } = useMovies();

    useEffect(() => {
        getData(fetch, 1);
    }, [data]);

    return (
        <Box
            width="100%"
            maxWidth="570px"
            border="1px solid #590E24"
            my={{ xs: 3 }}
            mx={{ xs: 0, sm: 4, md: 4 }}
        >
            <Typography padding={2} textAlign="center" bgcolor="#590E24">
                {title}
            </Typography>
            <List
                sx={{
                    width: "100%",
                    overflowY: "scroll",
                    maxHeight: "400px",
                }}
            >
                {data.results &&
                    data.results.map((movie) => (
                        <ListItem
                            disablePadding
                            alignItems="center"
                            key={movie.id}
                        >
                            <ListItemButton
                                onClick={() => navigate(`/movie/${movie.id}`)}
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        alt={movie.title}
                                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    />
                                </ListItemAvatar>
                                <ListItemText primary={movie.title} />
                                {isFavs(movie.id) ? (
                                    <IconButton
                                        onClick={(e) => delFavs(e, movie.id)}
                                    >
                                        <FaHeart color="#7D1631" />
                                    </IconButton>
                                ) : (
                                    <IconButton
                                        onClick={(e) =>
                                            addFavs(e, {
                                                title: movie.title,
                                                img: movie.poster_path,
                                                id: movie.id,
                                            })
                                        }
                                    >
                                        <FaRegHeart color="#7D1631" />
                                    </IconButton>
                                )}
                            </ListItemButton>
                        </ListItem>
                    ))}
            </List>
        </Box>
    );
}
