import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
    const { get, set } = useLocalStorage();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        get("favs") ? setFavorites(get("favs")) : setFavorites([]);
    }, []);

    const addFavs = (e, movie) => {
        e.stopPropagation();
        setFavorites([...favorites, movie]);
        set("favs", [...favorites, movie]);
    };

    const delFavs = (e, id) => {
        e.stopPropagation();
        setFavorites(favorites.filter((movie) => movie.id !== id));
        set(
            "favs",
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
