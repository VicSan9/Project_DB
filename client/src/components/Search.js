import Navbar from './Navbar';
import {
    Grid, Typography, AccordionDetails, AccordionSummary,
    Accordion, Card, TableCell, tableCellClasses, TableRow, TableContainer,
    Paper, Table, TableBody, TableHead
} from "@mui/material";
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';


export default function Search() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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

    const [dates, setDates] = React.useState([])

    const loadDates = async () => {
        const res = await fetch('http://localhost:4000/productsDates')
        const data = await res.json()
        setDates(data)
    }

    React.useEffect(() => {
        loadDates()
    }, [])

    const [members, setMembers] = React.useState([])

    const loadMembers = async () => {
        const res = await fetch('http://localhost:4000/members')
        const data = await res.json()
        setMembers(data)
    }

    React.useEffect(() => {
        loadMembers()
    }, [])

    const [sales, setSales] = React.useState([])

    const loadSales = async () => {
        const res = await fetch('http://localhost:4000/transactionSales')
        const data = await res.json()
        setSales(data)
    }

    React.useEffect(() => {
        loadSales()
    }, [])

    return (
        <Grid>
            <Navbar></Navbar>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="left">
                <h2>
                    Consultas
                </h2>
                <Card
                    sx={{
                        boxShadow: "none",
                        backgroundColor: "transparent",
                        width: "715px",
                        direction: "row",
                        mt: '10px'
                    }}>
                    <div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    Productos próximos a vencer
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>Lotes de productos que están próximos a vencer</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 680 }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell style={{ backgroundColor: "#484848" }}>Producto</StyledTableCell>
                                                <StyledTableCell style={{ backgroundColor: "#484848" }} align="right">Lote</StyledTableCell>
                                                <StyledTableCell style={{ backgroundColor: "#484848" }} align="right">Fecha de vencimiento</StyledTableCell>
                                                <StyledTableCell style={{ backgroundColor: "#484848" }} align="right">Stock</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                dates.map((date) => (
                                                    <StyledTableRow key={date.lote}>
                                                        <StyledTableCell align="left">{date.nombre}</StyledTableCell>
                                                        <StyledTableCell align="right">{date.lote}</StyledTableCell>
                                                        <StyledTableCell align="right">{date.fecha_vencimiento}</StyledTableCell>
                                                        <StyledTableCell align="right">{date.stack}</StyledTableCell>
                                                    </StyledTableRow>
                                                ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>Listado de vendedores</Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    Información de los vendedores de la tienda
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 680 }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell style={{ backgroundColor: "#484848" }}>ID de miembro</StyledTableCell>
                                                <StyledTableCell style={{ backgroundColor: "#484848" }} align="right">CC</StyledTableCell>
                                                <StyledTableCell style={{ backgroundColor: "#484848" }} align="right">Nombre</StyledTableCell>
                                                <StyledTableCell style={{ backgroundColor: "#484848" }} align="right">Dirección</StyledTableCell>
                                                <StyledTableCell style={{ backgroundColor: "#484848" }} align="right">Telefono</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                members.map((member) => (
                                                    <StyledTableRow key={member.id_miembro}>
                                                        <StyledTableCell align="left">{member.id_miembro}</StyledTableCell>
                                                        <StyledTableCell align="right">{member.cc}</StyledTableCell>
                                                        <StyledTableCell align="right">{member.nombre}</StyledTableCell>
                                                        <StyledTableCell align="right">{member.direccion}</StyledTableCell>
                                                        <StyledTableCell align="right">{member.telefono}</StyledTableCell>
                                                    </StyledTableRow>
                                                ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    Cantidad de ventas
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>
                                    Número de ventas que ha realizado un vendedor
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 680 }} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell style={{ backgroundColor: "#484848" }}>Nombre del miembro</StyledTableCell>
                                                <StyledTableCell style={{ backgroundColor: "#484848" }} align="right">Número de ventas realizadas</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                sales.map((sale) => (
                                                    <StyledTableRow key={sale.nombre}>
                                                        <StyledTableCell align="left">{sale.nombre}</StyledTableCell>
                                                        <StyledTableCell align="right">{sale.num_ventas}</StyledTableCell>
                                                    </StyledTableRow>
                                                ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
}