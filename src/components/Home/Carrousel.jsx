import { Box, Button, Typography } from "@mui/material";
import { GoDot, GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export default function Carrousel({
    title,
    img,
    desc,
    id,
    currentIndex,
    goToIndex,
    movies,
}) {
    const navigate = useNavigate();

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="end"
            alignItems="center"
            width="100%"
            height={460}
            sx={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${img})`,
                backgroundPosition: "top",
                backgroundSize: "cover",
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
            <Box display="flex" justifyContent="center" alignItems="center">
                {movies.map((movie, index) => (
                    <Box key={index}>
                        {index === currentIndex ? (
                            <GoDotFill color="white" fontSize="20px" />
                        ) : (
                            <GoDot
                                color="white"
                                onClick={() => goToIndex(index)}
                                cursor="pointer"
                            />
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
