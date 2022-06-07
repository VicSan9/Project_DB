import { AppBar, Box, Toolbar, IconButton, Avatar, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import BackpackIcon from '@mui/icons-material/Backpack';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='static'
                sx={{
                    backgroundColor: 'transparent',
                    opacity: [1],
                    '&:hover': {
                        backgroundColor: '#3498DB ',
                        opacity: [0.8]
                    }
                }}>
                <Toolbar variant="dense"
                    sx={{
                        height: '70px'
                    }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
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
                </Toolbar>
            </AppBar>
        </Box>
    )
}