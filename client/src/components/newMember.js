import Navbar from './Navbar';
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

export default function NewMember() {
    return(
        <Grid>
            <Navbar></Navbar>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="left">
                <h2>
                    Nuevo miembro
                </h2>
                <Card 
                sx={{
                    width:"650px", 
                    direction:"row",
                    mt:'10px',
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
                        <form>
                            <Grid container direction="row" alignItems="center" justifyContent="left">
                                <TextField
                                    helperText="Cédula de ciudadania"
                                    variant="outlined"
                                    size="small"
                                    label="CC"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        width: '191px'
                                    }}
                                    name="p_compra_u">
                                </TextField>
                                <TextField
                                    helperText="Nombre completo"
                                    variant="outlined"
                                    size="small"
                                    label="Nombre"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        ml: '15px',
                                        width: '398px'
                                    }}
                                    name="p_venta_u">
                                </TextField>
                            </Grid>
                            <Grid container direction="row" alignItems="center" justifyContent="left">
                                <TextField
                                    helperText="Número de teléfono"
                                    variant="outlined"
                                    size="small"
                                    label="Teléfono"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        width: '191px'
                                    }}
                                    name="fecha_vencimiento">
                                </TextField>
                                <TextField
                                    helperText="Lugar de residencia"
                                    variant="outlined"
                                    size="small"
                                    label="Dirección"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        ml: '15px',
                                        width: '191px'
                                    }}
                                    name="stack">
                                </TextField>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    fullWidth
                                    sx={{
                                        mb:'24px',
                                        ml:'15px',
                                        width:'193px'
                                    }}
                                >
                                    Registrar
                                </Button>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}