import {
    Avatar,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
} from "@mui/material";

export default function MovieSmallList({ title, movies }) {
    return (
        <Box width="100%" maxWidth="700px" border="1px solid #E47861">
            <Box padding={2} textAlign="center" bgcolor="#E47861">
                {title}
            </Box>
            <List
                sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                }}
            >
                <ListItem disablePadding alignItems="center">
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar
                                alt="Movie poster"
                                src="/static/images/avatar/1.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText primary="movie title" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding alignItems="center">
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar
                                alt="Movie poster"
                                src="/static/images/avatar/1.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText primary="movie title" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding alignItems="center">
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar
                                alt="Movie poster"
                                src="/static/images/avatar/1.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText primary="movie title" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}
