import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesSearch from "./components/Search/MoviesSearch";
import MovieDetail from "./components/MovieList/MovieDetail";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/premieres"
                    element={<MovieList title="Premieres" />}
                />
                <Route
                    path="/popular"
                    element={<MovieList title="Popular Movies" />}
                />
                <Route
                    path="/favorites"
                    element={<MovieList title="Your Favorites Movies" />}
                />
                <Route path="/search" element={<MoviesSearch />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                {/* <Route path="/*" element={<ErrorPage />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
