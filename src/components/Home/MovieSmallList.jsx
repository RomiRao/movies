import {
    Avatar,
    Box,
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

export default function MovieSmallList({ title, fetch }) {
    const navigate = useNavigate();

    const { data, getMovies } = useMovies();

    useEffect(() => {
        getMovies(fetch);
    }, [data]);

    return (
        <Box width="100%" maxWidth="570px" border="1px solid #E47861">
            <Typography padding={2} textAlign="center" bgcolor="#E47861">
                {title}
            </Typography>
            <List
                sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    overflow: "scroll",
                    maxHeight: "400px",
                }}
            >
                {data.map((movie) => (
                    <ListItem disablePadding alignItems="center" key={movie.id}>
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
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
