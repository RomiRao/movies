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

const navLinks = ["Home", "Latest", "Popular", "Favorites", "Search"];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar
                sx={{ bgcolor: "black", boxShadow: "none" }}
                position="static"
                elevation={0}
            >
                <Toolbar
                    sx={{
                        justifyContent: {
                            xs: "space-between",
                            sm: "flex-start",
                        },
                    }}
                >
                    <PiPopcornDuotone
                        fontSize="2em"
                        style={{ marginRight: "20px" }}
                    />
                    <List
                        sx={{
                            display: { xs: "none", sm: "flex" },
                            padding: "0px",
                        }}
                        id="sidebar"
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link}
                                to={`/${
                                    link !== "Home" ? link.toLowerCase() : ""
                                }`}
                                className={({ isActive, isTransitioning }) =>
                                    isTransitioning
                                        ? `${styles.transition}`
                                        : isActive
                                        ? `${styles.active}`
                                        : `${styles.pepito}`
                                }
                            >
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ height: "70px" }}>
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
                        <TiThMenu color="white" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={open}
                onClick={() => setOpen(false)}
                sx={{ display: { xs: "flex", sm: "none" } }}
            >
                <NavListDrawer setOpen={setOpen} navLinks={navLinks} />
            </Drawer>
        </>
    );
}
