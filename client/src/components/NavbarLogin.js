import { AppBar, Box, Toolbar, Grid, Avatar, Stack } from "@mui/material";
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
                <Toolbar
                    variant="dense"
                    sx={{
                        height: '70px'
                    }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center">
                        <Link
                            to='/login'
                            style={{
                                textDecoration: "none",
                                color: "#000",
                                fontSize: "30px",
                                fontWeight: "bold"
                            }}>     Backpack
                        </Link>
                        <Stack direction="row" spacing={1} sx={{ margin: '0px 10px' }}>
                            <Avatar
                                alt="Remy Sharp"
                                sx={{ width: 50, height: 50 }}>
                                <BackpackIcon fontSize="large" />
                            </Avatar>
                        </Stack>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}