import { Box, Button, Typography } from "@mui/material";

export default function Carrousel() {
    const images = [
        {
            src: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1ecde018e863e2aaee31f00a23378c35.jpe",
            alt: "one piece",
            desc: "asdfasdagas",
        },
        {
            src: "https://i.blogs.es/259581/one-piece/1366_2000.jpeg",
            alt: "one piece",
            desc: "asdasdas",
        },
        {
            src: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/08/one-piece_0.jpg?tf=3840x",
            alt: "one piece",
            desc: "asdasdas",
        },
    ];

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="end"
            alignItems="center"
            width="100%"
            height={400}
            sx={{
                backgroundImage: `url(${images[0].src})`,
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
                    {images[0].alt}
                </Typography>
                <Typography m={1} variant="body2">
                    {images[0].desc}
                </Typography>
                <Button m={1} variant="contained" size="small">
                    Ver mas...
                </Button>
            </Box>
        </Box>
    );
}
