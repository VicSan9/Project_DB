import Navbar from './Navbar';
import { Card, CardContent, Grid, Paper, Table, TableBody, TableCell, TableContainer,
         TableHead, TableRow, tableCellClasses } from "@mui/material";
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

export default function Inventory() {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

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
                <Card sx={{backgroundColor:"transparent", boxShadow: "none"}}>
                    <CardContent sx={{width:750}} >
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell style={{backgroundColor:"#484848"}}>Nombre</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor:"#484848"}} align="right">Descripción</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor:"#484848"}} align="right">Lote</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor:"#484848"}} align="right">Stack (cantidad)</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                    products.map((product) => (
                                        <StyledTableRow key={product.nombre}>
                                            <StyledTableCell align="right">{product.nombre}</StyledTableCell>
                                            <StyledTableCell align="right">{product.descripcion}</StyledTableCell>
                                            <StyledTableCell align="right">{product.lote}</StyledTableCell>
                                            <StyledTableCell align="right">{product.stack}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}