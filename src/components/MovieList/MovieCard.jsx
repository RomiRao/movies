import { Box, Icon, IconButton, Typography } from "@mui/material";
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
                    onClick={() => delFavs(id)}
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
                    onClick={() => addFavs({ title, img, id })}
                >
                    <FaRegHeart color="red" />
                </IconButton>
            )}

            <img src={img} width="100%" />
            <Typography textAlign="center" my={2}>
                {title}
            </Typography>
        </Box>
    );
}
