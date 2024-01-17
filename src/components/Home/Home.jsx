import { Box } from "@mui/material";
import MovieSmallList from "./MovieSmallList";
import Carrousel from "./Carrousel";
import { useEffect, useState } from "react";
import { GoDotFill, GoDot } from "react-icons/go";
import useMovies from "../Hooks/useMovies";
import BarLoader from "react-spinners/BarLoader";

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const { data, getMovies } = useMovies();
    useEffect(() => {
        getMovies("popular");
    }, [currentIndex]);

    const goNext = () => {
        const timeout = setTimeout(() => {
            if (currentIndex < data.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else if (currentIndex === data.length - 1) {
                setCurrentIndex(0);
            }
        }, 5000);
        clearTimeout(timeout);
    };

    const goToIndex = (index) => {
        setCurrentIndex(index);
    };

    goNext();

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
                        >
                            <Box
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                {data.map((movie, index) => (
                                    <Box key={index}>
                                        {index === currentIndex ? (
                                            <GoDotFill
                                                color="white"
                                                fontSize="20px"
                                            />
                                        ) : (
                                            <GoDot
                                                color="white"
                                                onClick={() => goToIndex(index)}
                                            />
                                        )}
                                    </Box>
                                ))}
                            </Box>
                        </Carrousel>
                    </Box>
                    <Box
                        padding={8}
                        sx={{
                            display: { sx: "block", sm: "block", md: "flex" },
                            justifyContent: "space-around",
                        }}
                    >
                        <MovieSmallList title="Latest Releases" />
                        <MovieSmallList title="Best Rated Movies" />
                    </Box>
                </>
            )}
        </>
    );
}
