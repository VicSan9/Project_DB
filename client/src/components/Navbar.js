import { AppBar, Box, Toolbar, IconButton, Avatar, Stack, Paper, Fade, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import BackpackIcon from '@mui/icons-material/Backpack';

const icon = (
    <Paper 
    sx={{
        width: 326, 
        height: 575,
        mt: 82,
        ml: -41,
        backgroundColor: 'transparent',
        opacity: [1],
        '&:hover': {
            backgroundColor: '#fff ',
            opacity: [1]
        }
    }} 
    elevation={10}>
        <Grid container>
            <Box alignContent="center" alignItems="center">
                <Typography 
                    component="h2"
                    mt="20px"
                    ml="20px"
                    color="#000"
                > asdasfasfa
                </Typography>
            </Box>
        </Grid>
    </Paper>
);

export default function Navbar() {
    const [checked, setChecked] = React.useState(false);

    const handleClic = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='static'
                sx={{
                    backgroundColor: 'transparent',
                    opacity: [1],
                    '&:hover': {
                        backgroundColor: '#fff ',
                        opacity: [0.8]
                    }
                }}>
                <Toolbar
                    variant="dense"
                    sx={{
                        height: '70px'
                    }}>
                    <IconButton sx={{ mr: 8 }} edge="start" aria-label="menu" onClick={handleClic}>
                        <MenuIcon />
                    </IconButton>
                        <Link 
                            to='/'
                            style={{
                                textDecoration: "none",
                                color: "#000",
                                fontSize: "30px",
                                fontWeight: "bold"
                        }}> Backpack
                        </Link>
                    <Stack direction="row" spacing={1} sx={{ margin: '0px 10px' }}>
                        <Avatar
                            alt="Remy Sharp"
                            src="src/backpack.jpg"
                            sx={{ width: 56, height: 56 }}>
                            <BackpackIcon fontSize="large"/>
                        </Avatar>
                    </Stack>
                    <Box>
                        <Fade in={checked}>{icon}</Fade>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}