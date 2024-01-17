import { useState } from "react";
import axios from "axios";

const useMovies = () => {
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
            const apiKey = import.meta.env.VITE_ACCESS_TOKEN;

            const response = await axios.get(
                "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                    },
                }
            );

            console.log("Response:", response.data.results);
            setData(response.data.results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    return { data, getMovies };
};

export default useMovies;
