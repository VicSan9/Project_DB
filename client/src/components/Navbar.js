import {
    AppBar, Box, Toolbar, Avatar, Stack, Paper, Fade, Typography, Grid, Button, CardContent,
    Card
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import BackpackIcon from '@mui/icons-material/Backpack';
import IconButton from '@mui/material/IconButton';

export default function Navbar() {

    const [checked, setChecked] = React.useState(false);

    const [admin, sedAdmin] = React.useState([])

    const loadAdmin = async () => {
        const res = await fetch('http://localhost:4000/administrators')
        const data = await res.json()
        sedAdmin(data)
    }

    React.useEffect(() => {
        loadAdmin()
    }, [])

    const handleClic = () => {
        setChecked((prev) => !prev);
    };

    const handleClic2 = () => {
        sessionStorage.clear()
        alert('Se ha cerrado la sección')
        navigate("/login")
    };

    const handleClic3 = () => {
        navigate('/edit-admin')
    }
    
    const navigate = useNavigate()

    const icon = (
        <Paper 
        sx={{
            width: 326,
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
            <Grid height={'90vh'} container direction="column" alignContent="center" alignItems="center" justifyContent="center">
                <Grid container direction="column" alignContent="center" alignItems="center" justifyContent="center">
                    <Box>
                        <Avatar
                            alt="Remy Sharp"
                            sx={{width: 50, height: 50 }}>     
                        </Avatar>
                    </Box>
                    <Typography 
                        fontWeight="bold"
                        mt="15px"
                        component="h2"
                        color="#000"
                    >   {
                            admin.map((ad) => (
                                ad.nombre
                            ))
                        }
                    </Typography>
                    <Typography 
                        mt="2px"
                        component="h5"
                        color="#000"
                        fontSize="13px"
                        >Administrador
                    </Typography>
                </Grid>
                <Card sx={{ mt: '20px', backgroundColor: 'transparent', boxShadow: 'none' }}>
                    <CardContent>
                        <Button
                            onClick={handleClic3}
                            variant="text"
                            fullWidth
                        >
                            Editar admin
                        </Button>
                    </CardContent>
                </Card>
                <Box container mt="260px" >
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
                        height: '9vh'
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