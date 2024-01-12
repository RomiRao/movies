import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function NavListDrawer({ setOpen, navLinks }) {
    return (
        <Box sx={{ width: 280 }} component="nav">
            <List>
                {navLinks.map((link) => (
                    <ListItem
                        key={link}
                        disablePadding
                        onClick={() => setOpen(false)}
                    >
                        <ListItemButton>
                            <ListItemText primary={link} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
