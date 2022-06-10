import Navbar from './Navbar';
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from 'react';

export default function Inventory() {

    const [products, setProducts] = useState([])

    const loadProducts = async () => {
        const res = await fetch('http://localhost:4000/products')
        const data = await res.json()
        setProducts(data)
    }

    useEffect(() =>  {
        loadProducts()
    }, [])

    return (
        <>
            <Navbar></Navbar>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="left">
                <h2>
                    Inventario
                </h2>
                {
                    products.map((product) => (
                        <Card>
                            <CardContent>
                                <Typography>{product.nombre}</Typography>
                                <Typography>{product.descripcion}</Typography>
                                <Typography>{product.lote}</Typography>
                                <Typography>{product.stack}</Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </Grid>
        </>
    )
}