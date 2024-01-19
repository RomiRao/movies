import { Box } from "@mui/material";
import MovieSmallList from "./MovieSmallList";
import Carrousel from "./Carrousel";
import { useEffect, useState } from "react";
import useMovies from "../../hooks/useMovies";
import BarLoader from "react-spinners/BarLoader";

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { data, getMovies } = useMovies();

    let timer = 0;

    useEffect(() => {
        getMovies("popular");
    }, []);

    useEffect(() => {
        goNext();
    }, [data, currentIndex]);

    const goToIndex = (index) => {
        clearTimeout(timer);
        setCurrentIndex(index);
    };

    const goNext = () => {
        timer = setTimeout(() => {
            if (currentIndex < data.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else if (currentIndex === data.length - 1) {
                setCurrentIndex(0);
            }
        }, 5000);
    };

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
                    <Box>
                        <Carrousel
                            title={data[currentIndex].title}
                            desc={data[currentIndex].overview}
                            img={data[currentIndex].backdrop_path}
                            id={data[currentIndex].id}
                            currentIndex={currentIndex}
                            goToIndex={goToIndex}
                            movies={data}
                        />
                    </Box>
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
