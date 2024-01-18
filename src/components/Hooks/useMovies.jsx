import { useState } from "react";
import axios from "axios";

const useMovies = () => {
    const apiKey = import.meta.env.VITE_ACCESS_TOKEN;
    const [data, setData] = useState([]);

    const getMovies = async (category) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    },
                }
            );
            setData(response.data.results);
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

    return { data, getMovies, getMovie };
};

export default useMovies;
