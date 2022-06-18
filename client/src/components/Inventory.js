import Navbar from './Navbar';
import { Card, CardContent, Grid, Paper, Table, TableBody, TableCell, TableContainer,
         TableHead, TableRow, tableCellClasses, Button } from "@mui/material";
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

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

    const navigate = useNavigate()

    const handleDelead = async (codigo) => {

        const res = await fetch(`http://localhost:4000/products/${codigo}`, {
          method: 'DELETE',
        })

        if(res.status === 200){
            alert('No se puede borrar el producto porque ya se han hecho una o mas transacciones con este.')
            return
        }

        if(res.status === 204){
            alert('Producto eliminado del inventario')
        }
    
        setProducts(products.filter((product) => product.codigo !== codigo))
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
                    <CardContent sx={{width:980}} >
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell style={{backgroundColor:"#484848"}}>Nombre</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor:"#484848"}} align="right">Descripción</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor:"#484848"}} align="right">Lote</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor:"#484848"}} align="right">Stock (cantidad)</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor:"#484848"}} align="right">P. Compra unidad</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor:"#484848"}} align="right">P. Venta unidad</StyledTableCell>
                                        <StyledTableCell style={{ backgroundColor: "#484848" }} align="center">Acción</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                    products.map((product) => (
                                        <StyledTableRow key={product.codigo}>
                                            <StyledTableCell align="left">{product.nombre}</StyledTableCell>
                                            <StyledTableCell align="right">{product.descripcion}</StyledTableCell>
                                            <StyledTableCell align="right">{product.lote}</StyledTableCell>
                                            <StyledTableCell align="right">{product.stack}</StyledTableCell>
                                            <StyledTableCell align="right">{product.p_compra_u}</StyledTableCell>
                                            <StyledTableCell align="right">{product.p_venta_u}</StyledTableCell>
                                            <StyledTableCell aling="right">
                                                <Button onClick={() => handleDelead(product.codigo)} sx={{ color: 'red' }}>
                                                    Eliminar
                                                </Button>
                                                <Button onClick={() => navigate(`/inventory/${product.codigo}/edit`)}>
                                                    Editar
                                                </Button>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}