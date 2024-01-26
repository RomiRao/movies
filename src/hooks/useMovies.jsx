import { useState } from "react";
import axios from "axios";

const useMovies = () => {
    const apiKey = import.meta.env.VITE_ACCESS_TOKEN;
    const [data, setData] = useState({});
    const [video, setVideo] = useState({});

    const getMovies = async (category, page) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    },
                }
            );
            setData(response.data);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const getMovie = async (id) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    },
                }
            );

            setData(response.data);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const getVideo = async (id) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    },
                }
            );

            setVideo(response.data.results[0]);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const searchMovie = async (input, page) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?query=${input}&language=en-US&page=${page}`,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    },
                }
            );
            setData(response.data);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    return { data, getMovies, getMovie, searchMovie, video, getVideo };
};

export default useMovies;
