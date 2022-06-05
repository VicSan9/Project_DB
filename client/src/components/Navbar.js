import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavbarLayout() {
    return (
        <Box>
            <AppBar position='static' sx={{
                backgroundColor: 'transparent',
                opacity: [1],
                '&:hover': {
                    backgroundColor: '#3498DB ',
                    opacity: [0.8]
                }
            }}>
                <Container>
                    <Toolbar>
                        <Link 
                            to='/'
                            style={{
                            textDecoration: "none",
                            color: "#000",
                            fontSize: "30px",
                            fontWeight: "bold"
                        }}> Backpack
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}