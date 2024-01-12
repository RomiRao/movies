import { Container } from "@mui/material";
import MovieSmallList from "./MovieSmallList";

export default function Home() {
    return (
        <>
            <h1>Carrousel</h1>
            <Container
                sx={{ display: "flex", justifyContent: "space-between" }}
            >
                <MovieSmallList />
                <MovieSmallList />
            </Container>
        </>
    );
}
