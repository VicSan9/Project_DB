import Navbar from './Navbar';
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function EditAdmin() {

const navigate = useNavigate()
    
const [final, sedFinal] = useState({
        id_admin: 6110,
        id_miembro: 2112,
        user_admin: '',
        contraseña: '',
    })

const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(final)

    const res = await fetch('http://localhost:4000/administrators/6110', {
        method: 'PUT',
        body: JSON.stringify(final),
        headers: { "content-Type": "application/json" }
    })

    const data = await res.json()
    console.log(data)

    sedFinal({
        id_admin: '',
        id_miembro: '',
        user_admin: '',
        contraseña: '',
    })

    navigate('/')
}

const handleChange = (e) => {
    sedFinal({
        ...final,
        [e.target.name]: e.target.value
    })
}


return (
    <Grid>
        <Navbar></Navbar>
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="left">
            <h2>
                Editar usuario y contraseña
            </h2>
            <Card
                sx={{
                    width: "430px",
                    direction: "row",
                    mt: '10px',
                    backgroundColor: '#fff',
                    opacity: [0.8],
                    '&:hover': {
                        backgroundColor: '#fff',
                        opacity: [1]
                    }
                }}
                style={{
                    boxShadow: '0px 0px 15px 0px',
                }}>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <Grid container direction="column" alignItems="center" justifyContent="left">
                            <TextField
                                helperText="Nuevo usuario"
                                variant="outlined"
                                size="small"
                                label="User"
                                margin="normal"
                                fullWidth
                                sx={{
                                    display: 'block',
                                    margin: '.8rem 0',
                                    width: '250px'
                                }}
                                name="user_admin"
                                value={final.user_admin}
                                onChange={handleChange}>
                            </TextField>
                            <TextField
                                helperText="Nueva contraseña"
                                variant="outlined"
                                size="small"
                                label="Contraseña"
                                margin="normal"
                                fullWidth
                                sx={{
                                    display: 'block',
                                    margin: '.8rem 0',
                                    width: '250px'
                                }}
                                name="contraseña"
                                value={final.contraseña}
                                onChange={handleChange}>
                            </TextField>
                            <Button type='submit'>
                                Guardar
                            </Button>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
)
}