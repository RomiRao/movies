import {
    AppBar,
    Breadcrumbs,
    IconButton,
    Link,
    Toolbar,
    Drawer,
} from "@mui/material";

export default function Navbar() {
    return (
        <AppBar
            sx={{ bgcolor: "transparent", boxShadow: "none" }}
            position="static"
            elevation={0}
        ></AppBar>
    );
}
