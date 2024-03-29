import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function MovieCarousel({ title, img, desc, id }) {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${img})`,
                backgroundPosition: "top",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                alignItems: "center",
                width: "100%",
                height: "460px",
            }}
        >
            <Box
                textAlign="center"
                p={2}
                elevation={6}
                sx={{
                    backgroundColor: "rgba(229, 228, 225, 0.65)",
                    width: "90%",
                    maxWidth: "500px",
                    m: 4,
                    color: "black",
                }}
            >
                <Typography variant="h5" m={2}>
                    {title}
                </Typography>
                <Typography m={1} variant="body2">
                    {desc.length < 200 ? desc : `${desc.slice(0, 200)}...`}
                </Typography>
                <Button
                    m={1}
                    variant="contained"
                    size="small"
                    onClick={() => navigate(`/movie/${id}`)}
                >
                    Details
                </Button>
            </Box>
        </Box>
    );
}
