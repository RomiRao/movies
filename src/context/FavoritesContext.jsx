import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
    const { get, set } = useLocalStorage();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        get("favMovies") ? setFavorites(get("favMovies")) : setFavorites([]);
    }, []);

    const addFavs = (e, movie) => {
        e.stopPropagation();
        setFavorites([...favorites, movie]);
        set("favMovies", [...favorites, movie]);
    };

    const delFavs = (e, id) => {
        e.stopPropagation();
        setFavorites(favorites.filter((movie) => movie.id !== id));
        set(
            "favMovies",
            favorites.filter((movie) => movie.id !== id)
        );
    };

    const isFavs = (id) => {
        console.log(favorites);
        return favorites.some((movie) => movie.id === id);
    };

    const data = {
        favorites,
        addFavs,
        delFavs,
        isFavs,
    };

    return (
        <FavoritesContext.Provider value={data}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;
