import { Container } from "@mui/material";

export default function Home() {
    return (
        <>
            <h1>Carrousel</h1>
            <Container
                sx={{ display: "flex", justifyContent: "space-between" }}
            >
                <div>Box1</div>
                <div>Box2</div>
            </Container>
        </>
    );
}
