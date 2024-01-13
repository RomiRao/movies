import { Box, Button } from "@mui/material";
import MovieSmallList from "./MovieSmallList";
import Carrousel from "./Carrousel";
import { useState } from "react";
import { GoDotFill, GoDot } from "react-icons/go";

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
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

    const goNext = () => {
        setTimeout(() => {
            if (currentIndex < images.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else if (currentIndex === images.length - 1) {
                setCurrentIndex(0);
            }
            console.log("timeout", currentIndex);
        }, 5000);
        clearTimeout(setTimeout);
    };

    goNext();

    const goToIndex = (index) => {
        setCurrentIndex(index);
        console.log("index", index, currentIndex);
    };

    return (
        <>
            <Box>
                <Carrousel
                    title={images[currentIndex].alt}
                    desc={images[currentIndex].desc}
                    img={images[currentIndex].src}
                    movies={images}
                >
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {images.map((movie, index) => (
                            <Box key={index}>
                                {index === currentIndex ? (
                                    <GoDotFill color="white" fontSize="20px" />
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
                <MovieSmallList title="Popular movies" />
                <MovieSmallList title="Best rated movies" />
            </Box>
        </>
    );
}
