import Navbar from './Navbar';
import {
  Card, CardContent, Grid, Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, tableCellClasses, Button
} from "@mui/material";
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';


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

const columns = [
  { field: 'id_proveedor', headerName: 'ID Proveedor', width: 70 },
  { field: 'nombre', headerName: 'Nombre', width: 130 },
  { field: 'descripcion', headerName: 'Descripción', width: 130 },
  { field: 'telefono', headerName: 'Telefono', width: 130 },
  { field: 'direccion', headerName: 'Dirección', width: 130 },

];

export default function Suppliers() {

  const [suppliers, setSuppliers] = useState([])

    const loadSuppliers = async () => {
      const res = await fetch('http://localhost:4000/suppliers')
      const data = await res.json()
      setSuppliers(data)
    }

  useEffect(() => {
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
          <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <CardContent sx={{ width: 800 }} >
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell style={{ backgroundColor: "#484848" }} > ID Proveedor</StyledTableCell>
                      <StyledTableCell style={{ backgroundColor: "#484848" }} align="right">Nombre</StyledTableCell>
                      <StyledTableCell style={{ backgroundColor: "#484848" }} align="right">Descripción</StyledTableCell>
                      <StyledTableCell style={{ backgroundColor: "#484848" }} align="right">Telefono</StyledTableCell>
                      <StyledTableCell style={{ backgroundColor: "#484848" }} align="right">Dirección</StyledTableCell>
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
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                 supplier={suppliers}
                 columns={columns}
                 pageSize={5}
                 rowsPerPageOptions={[5]}
                 checkboxSelection
                />
              </div>
              <Button
                variant="contained"
                type="submit"
                color = '#c62828'
                fullWidth
                sx={{
                    mb:'24px',
                    ml:'15px',
                    width:'193px'
                }}
              >
                Eliminar
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </>
  )
}