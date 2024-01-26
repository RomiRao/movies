import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import styles from "./NavListDrawer.module.css";

export default function NavListDrawer({ setOpen, navLinks }) {
    return (
        <Box sx={{ width: 280 }} component="nav">
            <List>
                {navLinks.map((link) => (
                    <NavLink
                        key={link}
                        to={`/${link !== "Home" ? link.toLowerCase() : ""}`}
                        className={({ isActive }) =>
                            isActive ? `${styles.active}` : `${styles.inactive}`
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
        </Box>
    );
}
