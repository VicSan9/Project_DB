import {
    AppBar, Box, Toolbar, Avatar, Stack, Paper, Fade, Typography, Grid, Button, CardContent,
    Card, DialogContent, DialogActions, Dialog, DialogTitle
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import BackpackIcon from '@mui/icons-material/Backpack';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));

    const BootstrapDialogTitle = (props) => {
        const { children, onClose, ...other } = props;

        return (
            <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
                {children}
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
        );
    };

    BootstrapDialogTitle.propTypes = {
        children: PropTypes.node,
        onClose: PropTypes.func.isRequired,
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [checked, setChecked] = React.useState(false);

    const [admin, sedAdmin] = React.useState([])

    const loadAdmin = async () => {
        const res = await fetch('http://localhost:4000/administrators')
        const data = await res.json()
        sedAdmin(data)
        console.log(data[0].nombre)
    }

    React.useEffect(() => {
        loadAdmin()
    }, [])

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
                mt: 83,
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
                <Grid>
                    <Box container mt="0px" ml="27px">
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
                    >{
                            admin.map((ad) => (
                                ad.nombre
                            ))
                        }
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
                <Card sx={{ mt: '20px', backgroundColor: 'transparent', boxShadow: 'none' }}>
                    <CardContent>
                        <Button
                            onClick={handleClickOpen}
                            variant="text"
                            fullWidth
                        >
                            Editar admin
                        </Button>
                        <BootstrapDialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                Editar administrador
                            </BootstrapDialogTitle>
                            <DialogContent dividers>
                                <Grid>
                                    <Card boxShadow='none'>
                                        <CardContent>
                                            <div>
                                                :D
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </DialogContent>
                            <DialogActions>
                                <Button autoFocus onClick={handleClose}>
                                    Save changes
                                </Button>
                            </DialogActions>
                        </BootstrapDialog>
                    </CardContent>
                </Card>
                <Box container mt="270px" >
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