import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

let theme = createTheme({
    palette: {
        primary: {
            main: "#590E24",
        },
        secondary: {
            main: "#edf2ff",
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
