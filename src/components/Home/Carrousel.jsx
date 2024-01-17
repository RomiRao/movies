import { Box, Button, Typography } from "@mui/material";

export default function Carrousel({ title, img, desc, id, children }) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="end"
            alignItems="center"
            width="100%"
            height={400}
            sx={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <Box
                textAlign="center"
                p={2}
                elevation={6}
                sx={{
                    backgroundColor: "rgba(229, 228, 225, 0.85)",
                    width: "90%",
                    maxWidth: "500px",
                    m: 4,
                }}
            >
                <Typography variant="h5" m={2}>
                    {title}
                </Typography>
                <Typography m={1} variant="body2">
                    {desc}
                </Typography>
                <Button m={1} variant="contained" size="small">
                    Ver mas...
                </Button>
            </Box>
            {children}
        </Box>
    );
}
