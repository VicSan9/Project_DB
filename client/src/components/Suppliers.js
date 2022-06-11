import Navbar from './Navbar';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Grid } from "@mui/material";
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';

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
        <Grid>
            <Navbar></Navbar>
         <Container>
         <Grid
                direction="column"
                alignItems="center"
                justifyContent="left">

                <h2>
                    Proveedores
                </h2>

        
                {
                    
                        <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                          <TableHead>
                            <TableRow>
                              <StyledTableCell>id_proveedor</StyledTableCell>
                              <StyledTableCell align="right">nombre</StyledTableCell>
                              <StyledTableCell align="right">descripcion</StyledTableCell>
                              <StyledTableCell align="right">telefono</StyledTableCell>
                              <StyledTableCell align="right">direccion</StyledTableCell>
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

                     

                }

         </Grid>       
         </Container>
        </Grid> 
    )
    }