import { Box, IconButton, Typography } from "@mui/material";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function MovieCard({ title, img, id }) {
    const navigate = useNavigate();

    return (
        <Box width={230} m={1} onClick={() => navigate(`/movie/${id}`)}>
            <IconButton
                sx={{
                    position: "absolute",
                    zIndex: "1",
                    m: "5px",
                }}
            >
                <FaRegHeart color="red" />
            </IconButton>
            <img
                src={`https://image.tmdb.org/t/p/original/${img}`}
                width="100%"
            />
            <Typography textAlign="center" my={2}>
                {title}
            </Typography>
        </Box>
    );
}
