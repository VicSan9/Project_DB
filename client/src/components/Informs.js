import Navbar from './Navbar';
import { Card, CardContent, Grid, Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, tableCellClasses } from "@mui/material";
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

export default function Informs() {
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

    const [informs, setInforms] = useState([])

    const loadInforms = async () => {
        const res = await fetch('http://localhost:4000/reports')
        const data = await res.json()
        setInforms(data)
    }

    useEffect(() =>  {
        loadInforms()
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
                    Informes
                </h2>
                <Card sx={{backgroundColor:"transparent", boxShadow: "none"}}>
                    <CardContent sx={{width:750}} >
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell style={{backgroundColor:"#484848"}}>Producto</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor:"#484848"}} align="right">Total de costos</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor:"#484848"}} align="right">Total de ventas</StyledTableCell>
                                        <StyledTableCell style={{backgroundColor:"#484848"}} align="right">Utilidad</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                    informs.map((inform) => (
                                        <StyledTableRow key={inform.nombre_producto}>
                                            <StyledTableCell align="left">{inform.nombre_producto}</StyledTableCell>
                                            <StyledTableCell align="right">{inform.total_de_costos}</StyledTableCell>
                                            <StyledTableCell align="right">{inform.total_de_ventas}</StyledTableCell>
                                            <StyledTableCell align="right">{inform.total_de_utilidad}</StyledTableCell>
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