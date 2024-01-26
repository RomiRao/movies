import { useState } from "react";
import axios from "axios";

const useMovies = () => {
    const apiKey = import.meta.env.VITE_ACCESS_TOKEN;
    const [data, setData] = useState([]);
    const [video, setVideo] = useState([]);

    const fetchMovies = async (url) => {
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            });
            setData(response.data);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const getData = async (ref, page) => {
        const url = `https://api.themoviedb.org/3/movie/${ref}?language=en-US${
            page ? `&page=${page}` : ""
        }`;
        await fetchMovies(url);
    };

    const searchMovie = async (input, page) => {
        const url = `https://api.themoviedb.org/3/search/movie?query=${input}&language=en-US&page=${page}`;
        await fetchMovies(url);
    };

    const getVideo = async (id) => {
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            });
            setVideo(
                response.data.results.filter((obj) => obj.type === "Trailer")
            );
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };

    return { data, getData, searchMovie, video, getVideo };
};

export default useMovies;
