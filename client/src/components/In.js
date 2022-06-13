import Navbar from './Navbar';
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useState } from "react";

export default function In() {

    const [newProduct, setNewProduct] = useState({  nombre: '', 
                                                    p_compra_u: '',
                                                    p_venta_u: '',
                                                    lote: '',
                                                    descripcion: '',
                                                    stack: '',
                                                    fecha_vencimiento: ''});

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(newProduct);

        const res = await fetch('http://localhost:4000/products', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: { "content-Type": "application/json" }
        })  

        const data = await res.json()
        console.log(data)

        setNewProduct({ 
            nombre: '', 
            p_compra_u: '',
            p_venta_u: '',
            lote: '',
            descripcion: '',
            stack: '',
            fecha_vencimiento: ''});
        
        alert("Producto agregado")
    }  

    const handleChange = e => {
        console.log(e.target.name, e.target.value);
        setNewProduct({
        ...newProduct,
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
                        <form onSubmit={handleSubmit}>
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
                                    name="nombre"
                                    value={newProduct.nombre}
                                    onChange={handleChange}>
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
                                    name="descripcion"
                                    value={newProduct.descripcion}
                                    onChange={handleChange}>
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
                                    name="p_compra_u"
                                    value={newProduct.p_compra_u}
                                    onChange={handleChange}>
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
                                    name="p_venta_u"
                                    value={newProduct.p_venta_u}
                                    onChange={handleChange}>
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
                                    name="lote"
                                    value={newProduct.lote}
                                    onChange={handleChange}>
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
                                    name="fecha_vencimiento"
                                    value={newProduct.fecha_vencimiento}
                                    onChange={handleChange}>
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
                                    name="stack"
                                    value={newProduct.stack}
                                    onChange={handleChange}>
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