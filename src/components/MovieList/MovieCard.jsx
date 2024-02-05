import { Box, IconButton, Typography } from "@mui/material";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesContext";
import { useContext } from "react";

export default function MovieCard({ title, img, id }) {
    const { addFavs, delFavs, isFavs } = useContext(FavoritesContext);

    const navigate = useNavigate();

    return (
        <Box width={230} m={1} onClick={() => navigate(`/movie/${id}`)}>
            {isFavs(id) ? (
                <IconButton
                    sx={{
                        position: "absolute",
                        zIndex: "1",
                        m: "5px",
                    }}
                    onClick={(e) => delFavs(e, id)}
                >
                    <FaHeart color="red" />
                </IconButton>
            ) : (
                <IconButton
                    sx={{
                        position: "absolute",
                        zIndex: "1",
                        m: "5px",
                    }}
                    onClick={(e) =>
                        addFavs(e, {
                            title,
                            img,
                            id,
                        })
                    }
                >
                    <FaRegHeart color="red" />
                </IconButton>
            )}
            <Box
                sx={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${img})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    height: "370px",
                }}
            />
            <Typography textAlign="center" color="secondary" my={2}>
                {title}
            </Typography>
        </Box>
    );
}
