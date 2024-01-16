import { useState } from "react";

const useMovies = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        console.log(data);
    };

    return { data, getData };
};

export default useMovies;
