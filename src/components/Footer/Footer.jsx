import { Box, Link, Typography } from "@mui/material";
import { MdLocalMovies } from "react-icons/md";

export default function Footer() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ backgroundColor: "black", padding: 3 }}
        >
            <MdLocalMovies />
            <Link
                mx={1}
                href="https://portfolio-romina-rao.vercel.app"
                underline="hover"
                variant="body2"
                color="secondary"
                target="_blank"
            >
                Check my other proyects!
            </Link>
        </Box>
    );
}
