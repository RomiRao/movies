import {
    AppBar,
    Box,
    Button,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { PiPopcornDuotone } from "react-icons/pi";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const navLinks = ["Home", "Premieres", "Popular", "Favorites", "Search"];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar
                sx={{ bgcolor: "#565267", boxShadow: "none" }}
                position="static"
                elevation={0}
            >
                <Toolbar
                    sx={{
                        justifyContent: {
                            xs: "space-between",
                            md: "flex-start",
                        },
                    }}
                >
                    <PiPopcornDuotone fontSize="2em" />
                    <List sx={{ display: "flex" }}>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link}
                                to={`/${
                                    link !== "Home" ? link.toLowerCase() : ""
                                }`}
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active"
                                        : ""
                                }
                            >
                                <ListItem disablePadding>
                                    <ListItemButton
                                        className={styles.buttonLink}
                                    >
                                        <ListItemText primary={link} />
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                        ))}
                    </List>

                    <IconButton
                        onClick={() => setOpen(true)}
                        sx={{
                            display: { xs: "flex", sm: "none" },
                        }}
                    >
                        <TiThMenu />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: { xs: "flex", sm: "none" } }}
            >
                <NavListDrawer setOpen={setOpen} navLinks={navLinks} />
            </Drawer>
        </>
    );
}
