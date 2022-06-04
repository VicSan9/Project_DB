import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export default function login() {
    return (
        <Box>
            <AppBar position='static' color='transparent'>
                <Container>
                    <Toolbar>
                        <Link to='/' style={{
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