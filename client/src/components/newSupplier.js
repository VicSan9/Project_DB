import Navbar from './Navbar';
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

export default function NewSupplier() {

    const navigate = useNavigate()
    const params = useParams()

    const [editing, setEditing] = useState(false)
    const [newSupplier, setNewSupplier] = useState({
                                                    id_proveedor: '', 
                                                    nombre: '',
                                                    descripcion: '',
                                                    telefono: '',
                                                    direccion: ''
                                                    });

    const handleClic = () => {
        navigate('/suppliers')
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editing) {
            const res = await fetch(`http://localhost:4000/suppliers/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify(newSupplier),
                headers: { "content-Type": "application/json" }
            })

            const data = await res.json()

            setNewSupplier({
                id_proveedor: '',
                nombre: '',
                descripcion: '',
                telefono: '',
                direccion: ''
            });

            if(!data.message){
                alert('Se ha modificado el proveedor de manera correcta')
                navigate('/suppliers')
                return
            }
            
            if(data.message.name === 'error'){
                alert('Ha ocurrido un error, asegurese de llenar todos los campos y escribir bien los datos')
                return
            }
        } else {
            const res = await fetch('http://localhost:4000/suppliers', {
            method: 'POST',
            body: JSON.stringify(newSupplier),
            headers: { "content-Type": "application/json" }
            })  

            const data = await res.json()

            setNewSupplier({
                id_proveedor: '',
                nombre: '',
                descripcion: '',
                telefono: '',
                direccion: ''
            });

            if(!data.message){
                alert('Se ha agregado el proveedor de manera correcta')
                return
            }
            
            if(data.message.name === 'error'){
                alert('Ha ocurrido un error, asegurese de llenar todos los campos y escribir bien los datos')
                return
            }
        }
    }  

    const handleChange = e => {
        setNewSupplier({
            ...newSupplier,
        [e.target.name]: e.target.value
        })
    }

    const loadSupplier = async (id) => {
        const res = await fetch(`http://localhost:4000/suppliers/${id}`)
        const data = await res.json()
        setNewSupplier({
            id_proveedor: data.id_proveedor,
            nombre: data.nombre,
            descripcion: data.descripcion,
            telefono: data.telefono,
            direccion: data.direccion
        });

        setEditing(true)
    }

    useEffect(() => {
        if (params.id) {
            loadSupplier(params.id)
        }
    }, [params.id])

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
                                <TextField
                                    helperText="Escriba el nombre del proveedor"
                                    variant="outlined"
                                    size="small"
                                    label="Nombre del proveedor"
                                    margin="normal"
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0'
                                    }}
                                    name="nombre"
                                    value={newSupplier.nombre}
                                    onChange={handleChange}>
                                </TextField>
                                <TextField
                                    helperText="Escriba una descripción del proveedor"
                                    variant="outlined"
                                    size="small"
                                    label="Descripción del proveedor"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        ml: '15px',
                                        width: '380px'
                                    }}
                                    name="descripcion"
                                    value={newSupplier.descripcion}
                                    onChange={handleChange}>
                                </TextField>
                            </Grid>
                            <Grid container direction="row" alignItems="center" justifyContent="left">
                                <TextField
                                    helperText="ID del proveedor"
                                    variant="outlined"
                                    size="small"
                                    label="ID proveedor"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        width: '191px'
                                    }}
                                    name="id_proveedor"
                                    value={newSupplier.id_proveedor}
                                    onChange={handleChange}>
                                </TextField>
                                <TextField
                                    helperText="Teléfono del proveedor"
                                    variant="outlined"
                                    size="small"
                                    label="Teléfono"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        ml: '15px',
                                        width: '191px'
                                    }}
                                    name="telefono"
                                    value={newSupplier.telefono}
                                    onChange={handleChange}>
                                </TextField>
                                <TextField
                                    helperText="Dirección del proveedor"
                                    variant="outlined"
                                    size="small"
                                    label="Dirección"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        ml: '15px',
                                        width: '193px'
                                    }}
                                    name="direccion"
                                    value={newSupplier.direccion}
                                    onChange={handleChange}>
                                </TextField>
                            </Grid>
                            <Grid container direction="column" alignItems="center" justifyContent="left">
                                <Button
                                    variant="contained"
                                    type="submit"
                                    fullWidth
                                    sx={{
                                        mb: '18px',
                                        width: '193px'
                                    }}
                                >
                                    Registrar
                                </Button>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
                <Button onClick={handleClic} sx={{mt:'25px'}}>
                    Volver a proveedores
                </Button>
            </Grid>
        </Grid>
    )
}