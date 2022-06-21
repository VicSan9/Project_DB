import Navbar from './Navbar';
import {
    Grid, Card, CardContent, MenuItem, Button,
    Select, InputLabel, FormControl, TextField, FormHelperText
} from "@mui/material";
import * as React from 'react';

export default function Out() {

    const [tran, setTran] = React.useState(
        {fecha: '',
        id_miembro: ''}
    );

    const [tranProd, setTranProd] = React.useState(
        {num_unico: '',
        codigo: '',
        cantidad_comprada: ''}
    );

    const handleChange = (e) => {
        setTranProd({
            ...tranProd,
            [e.target.name]: e.target.value
            });
    };

    const handleChange2 = (e) => {
        setTran({
            ...tran,
            [e.target.name]: e.target.value
            });
    }

    const loadProducts = async () => {
        const res = await fetch('http://localhost:4000/products')
        const data = await res.json()
        setProducts(data)
    }

    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        loadProducts()
    }, [])

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (tranProd.codigo === ""){
            alert("Escoja un producto primero")
            return
        }

        const res = await fetch('http://localhost:4000/transaction', {
            method: 'POST',
            body: JSON.stringify(tran),
            headers: { "content-Type": "application/json" }
        })  

        const data = await res.json()
        const num_unico = data.num_unico

        setTranProd(tranProd.num_unico = num_unico)

        setTran({
            fecha: '',
            id_miembro: ''
        })

        setTranProd({
            num_unico: '',
            codigo: '',
            cantidad_comprada: ''
        })

        const res2 = await fetch('http://localhost:4000/transactionproduct', {
            method: 'POST',
            body: JSON.stringify(tranProd),
            headers: { "content-Type": "application/json" }
        })
        
        const data2 = await res2.json()
        console.log('1:')
        console.log(data)
        console.log(res)
        console.log('2:')
        console.log(data2)
        console.log(res2)

        if(!data.message){
            if(!data2.message){
                alert('Transacción registrada de manera correcta')
                return
            }
        }

        if(data2.message.code === 'P0001'){
            alert('Error: No se ha guardado la transacción debido a que has sobre pasado la cantidad de productos que hay disponibles')
            return
        } 

        if(data2.message.name === 'error'){
            alert('Ha ocurrido un error, asegurese de llenar todos los campos y escribir bien los datos')
            return
        }

        if(data.message.name === 'error'){
            alert('Ha ocurrido un error, asegurese de llenar todos los campos y escribir bien los datos')
            return
        }
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
                    Salidas
                </h2>
                <Card
                    sx={{
                        width: "650px",
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
                            <Grid container direction="row" alignItems="center" justifyContent="left">
                                <FormControl size='small' sx={{ m: 1, width: 380 }}>
                                    <InputLabel id="demo-simple-name-label">Producto</InputLabel>
                                    <Select
                                        defaultValue=''
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name="codigo"
                                        value={tranProd.codigo}
                                        label="Producto"
                                        onChange={handleChange}
                                    >
                                        {products.map((product) => (
                                            <MenuItem
                                                key={product.codigo}
                                                value={product.codigo}
                                            >{product.nombre + " - Lote: " + product.lote + " - Disponibles: " + product.stack}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <FormHelperText>Seleccione el producto que ha vendido</FormHelperText>
                                </FormControl>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    label="Cantidad"
                                    helperText="Cantidad vendida"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        ml: '15px',
                                        width: '191px'
                                    }}
                                    name="cantidad_comprada"
                                    value={tranProd.cantidad_comprada}
                                    onChange={handleChange}>
                                </TextField>
                            </Grid>
                            <Grid container direction="row" alignItems="center" justifyContent="left">
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    label="Fecha"
                                    helperText="Fecha de venta"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        ml: '10px',
                                        width: '191px'
                                    }}
                                    name="fecha"
                                    value={tran.fecha}
                                    onChange={handleChange2}>
                                </TextField>
                                <TextField
                                    variant="outlined"
                                    size="small"
                                    label="ID del vendedor"
                                    helperText="ID del vendedor"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        ml: '15px',
                                        width: '191px'
                                    }}
                                    name="id_miembro"
                                    value={tran.id_miembro}
                                    onChange={handleChange2}>
                                </TextField>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    fullWidth
                                    sx={{
                                        mb:'25px',
                                        ml:'15px',
                                        width:'180px'
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