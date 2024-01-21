import { Box } from "@mui/material";
import MovieSmallList from "./MovieSmallList";
import MovieCarousel from "./MovieCarousel";
import { useEffect } from "react";
import useMovies from "../../hooks/useMovies";
import BarLoader from "react-spinners/BarLoader";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
    const { data, getMovies } = useMovies();

    useEffect(() => {
        getMovies("popular");
    }, []);

    return (
        <>
            {data.length === 0 ? (
                <Box padding={40} display="flex" justifyContent="center">
                    <BarLoader
                        color="#E47861"
                        size={150}
                        aria-label="Loading Spinner"
                    />
                </Box>
            ) : (
                <>
                    <Carousel
                        autoPlay
                        infiniteLoop
                        interval={3000}
                        showThumbs={false}
                        showArrows={false}
                        showStatus={false}
                    >
                        {data.map((movie) => (
                            <MovieCarousel
                                key={movie.id}
                                title={movie.title}
                                desc={movie.overview}
                                img={movie.backdrop_path}
                                id={movie.id}
                            />
                        ))}
                    </Carousel>
                    <Box
                        padding={8}
                        sx={{
                            display: { sx: "block", sm: "block", md: "flex" },
                            justifyContent: "space-around",
                        }}
                    >
                        <MovieSmallList title="Popular" fetch="popular" />
                        <MovieSmallList
                            title="Best Rated Movies"
                            fetch="top_rated"
                        />
                    </Box>
                </>
            )}
        </>
    );
}
