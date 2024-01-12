import { AppBar, Box, Button, Toolbar, IconButton } from "@mui/material";
import { PiPopcornDuotone } from "react-icons/pi";
import { TiThMenu } from "react-icons/ti";
import { useState } from "react";

const pages = ["Home", "Premieres", "Popular", "Favs", "Search"];

export default function Navbar() {
    // const [open, setOpen] = useState(false);

    return (
        <AppBar
            sx={{ bgcolor: "#565267", boxShadow: "none" }}
            position="static"
            elevation={0}
        >
            <Toolbar
                sx={{
                    justifyContent: { xs: "space-between", md: "flex-start" },
                }}
            >
                <PiPopcornDuotone fontSize="2em" />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
                <IconButton
                    //onClick={() => setOpen(true)}
                    sx={{
                        display: { xs: "flex", sm: "none" },
                    }}
                >
                    <TiThMenu />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
