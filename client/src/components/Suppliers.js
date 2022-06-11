import Navbar from './Navbar';
import { Card, CardContent, Grid, Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, tableCellClasses} from "@mui/material";
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

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

export default function Suppliers() {
    
    const [suppliers, setSuppliers] = useState([])

    const loadSuppliers = async () => {
        const res = await fetch('http://localhost:4000/suppliers')
        const data = await res.json()
        setSuppliers(data)
    }

    useEffect(() =>  {
        loadSuppliers()
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
                    Proveedores
                </h2>

                       
                    <Card sx={{backgroundColor:"transparent", boxShadow: "none"}}>
                    <CardContent sx={{width:800}} >
                        <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                          <TableHead>
                            <TableRow>
                              <StyledTableCell style={{backgroundColor:"#484848"}} > ID Proveedor</StyledTableCell>
                              <StyledTableCell style={{backgroundColor:"#484848"}} align="right">Nombre</StyledTableCell>
                              <StyledTableCell style={{backgroundColor:"#484848"}} align="right">Descripción</StyledTableCell>
                              <StyledTableCell style={{backgroundColor:"#484848"}} align="right">Telefono</StyledTableCell>
                              <StyledTableCell style={{backgroundColor:"#484848"}} align="right">Dirección</StyledTableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {suppliers.map((supplier) => (
                              <StyledTableRow key={supplier.id_proveedor}>
                                <StyledTableCell component="th" scope="row">
                                  {supplier.id_proveedor}
                                </StyledTableCell>
                                <StyledTableCell align="right">{supplier.nombre}</StyledTableCell>
                                <StyledTableCell align="right">{supplier.descripcion}</StyledTableCell>
                                <StyledTableCell align="right">{supplier.telefono}</StyledTableCell>
                                <StyledTableCell align="right">{supplier.direccion}</StyledTableCell>
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