import { Box } from "@mui/material";
import MovieSmallList from "./MovieSmallList";
import Carrousel from "./Carrousel";

export default function Home() {
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
        <>
            {images.map((movie) => (
                <Carrousel
                    key={movie.src}
                    title={movie.alt}
                    desc={movie.desc}
                    img={movie.src}
                />
            ))}
            <Box
                padding={8}
                sx={{
                    display: { sx: "block", sm: "block", md: "flex" },
                    justifyContent: "space-around",
                }}
            >
                <MovieSmallList title="Popular movies" />
                <MovieSmallList title="Best rated movies" />
            </Box>
        </>
    );
}
