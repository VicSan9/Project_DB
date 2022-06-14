import { AppBar, Box, Toolbar, IconButton, Avatar, Stack, Paper, Fade, Typography, Grid, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import BackpackIcon from '@mui/icons-material/Backpack';

export default function Navbar() {
    const [checked, setChecked] = React.useState(false);

    const handleClic = () => {
        setChecked((prev) => !prev);
    };

    const handleClic2 = () => {
        localStorage.clear()
        navigate("/login")
    };
    
    const navigate = useNavigate()

    const icon = (
        <Paper 
        sx={{
            width: 326, 
            height: 550,
            mt: 78,
            ml: -41,
            backgroundColor: 'transparent',
            opacity: [1],
            '&:hover': {
                backgroundColor: '#fff ',
                opacity: [1]
            }
        }} 
        elevation={10}>
            <Grid container direction="column" alignContent="center" alignItems="center" justifyContent="center">
                <Grid>
                    <Box container mt="20px" ml="27px">
                        <Avatar
                            alt="Remy Sharp"
                            sx={{width: 50, height: 50 }}>     
                        </Avatar>
                    </Box>
                    <Typography 
                        fontWeight="bold"
                        mt="15px"
                        ml="3px"
                        component="h2"
                        color="#000"
                        >Mercy Castro
                    </Typography>
                    <Typography 
                        ml="10px"
                        mt="2px"
                        component="h5"
                        color="#000"
                        fontSize="13px"
                        >Administrador
                    </Typography>
                </Grid>
                <Box container mt="365px" >
                    <Button
                        onClick={handleClic2}
                        variant="text"
                        fullWidth
                        sx={{
                            color:'red'
                        }}
                    >
                        Sign Out
                    </Button>
                </Box>
            </Grid>
        </Paper>
    );

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
                        height: '65px'
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