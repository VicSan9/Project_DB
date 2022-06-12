import Navbar from './Navbar';
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";

export default function In() {
    return (
        <Grid>
            <Navbar></Navbar>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="left">
                <h2>
                    Entradas
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
                                    helperText="Escriba el nombre del producto"
                                    variant="outlined"
                                    size="small"
                                    label="Nombre del producto"
                                    margin="normal"
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0'
                                    }}
                                    name="">
                                </TextField>
                                <TextField
                                    helperText="Escriba la descripción del producto"
                                    variant="outlined"
                                    size="small"
                                    label="Descripción del producto"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        ml: '15px',
                                        width: '380px'
                                    }}
                                    name="">
                                </TextField>
                            </Grid>
                            <Grid container direction="row" alignItems="center" justifyContent="left">
                                <TextField
                                    helperText="Precio por unidad"
                                    variant="outlined"
                                    size="small"
                                    label="Precio de compra"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        width: '191px'
                                    }}
                                    name="">
                                </TextField>
                                <TextField
                                    helperText="Precio por unidad"
                                    variant="outlined"
                                    size="small"
                                    label="Precio de venta"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        ml: '15px',
                                        width: '191px'
                                    }}
                                    name="">
                                </TextField>
                                <TextField
                                    helperText="Número de lote"
                                    variant="outlined"
                                    size="small"
                                    label="Lote"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        ml: '15px',
                                        width: '193px'
                                    }}
                                    name="">
                                </TextField>
                            </Grid>
                            <Grid container direction="row" alignItems="center" justifyContent="left">
                                <TextField
                                    helperText="Vencimiento del producto"
                                    variant="outlined"
                                    size="small"
                                    label="Fecha de vencimiento"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        width: '191px'
                                    }}
                                    name="">
                                </TextField>
                                <TextField
                                    helperText="Cantidad que ingresa"
                                    variant="outlined"
                                    size="small"
                                    label="Stack"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        ml: '15px',
                                        width: '191px'
                                    }}
                                    name="">
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