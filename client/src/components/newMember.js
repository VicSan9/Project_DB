import Navbar from './Navbar';
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

export default function NewMember() {

    const navigate = useNavigate()
    const params = useParams()

    const [editing, setEditing] = useState(false)
    const [member, setMember
    ] = useState({
        cc: '',
        nombre: '',
        telefono: '',
        direccion: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editing) {
            const res = await fetch(`http://localhost:4000/members/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify(member),
                headers: { "content-Type": "application/json" }
            })
            const data = await res.json()

            setMember
            ({
                cc: '',
                nombre: '',
                telefono: '',
                direccion: '',
            });

            if (!data.message) {
                alert('Se ha editado el miembro de manera correcta')
                navigate('/')
                return
            }

            if (data.message.name === 'error') {
                alert('Ha ocurrido un error, asegurese de llenar todos los campos y escribir bien los datos')
                return
            }

        } else {
            const res = await fetch('http://localhost:4000/members', {
                method: 'POST',
                body: JSON.stringify(member),
                headers: { "content-Type": "application/json" }
            })
            const data = await res.json()

            setMember
            ({
                cc: '',
                nombre: '',
                telefono: '',
                direccion: '',
            });

            if (!data.message) {
                alert('Se ha agregado el miembro de manera correcta')
                navigate('/search')
                return
            }

            if (data.message.name === 'error') {
                alert('Ha ocurrido un error, asegurese de llenar todos los campos y escribir bien los datos')
                return
            }
        }
    }

    const handleChange = e => {
        setMember
        ({...member,
            [e.target.name]: e.target.value
        })
    }

    const loadMember = async (id) => {
        const res = await fetch(`http://localhost:4000/members/${id}`)
        const data = await res.json()
        setMember
        ({
            cc: data.cc,
            nombre: data.nombre,
            telefono: data.telefono,
            direccion: data.direccion,
        });

        setEditing(true)
    }

    useEffect(() => {
        if (params.id) {
            loadMember(params.id)
        }
    }, [params.id])

    return(
        <Grid>
            <Navbar></Navbar>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="left">
                <h2>
                    {editing ? 'Editar miembro' : 'Nuevo miembro'}
                </h2>
                <Card 
                sx={{
                    width:"650px", 
                    direction:"row",
                    mt:'10px',
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
                                    helperText="Cédula de ciudadania"
                                    variant="outlined"
                                    size="small"
                                    label="CC"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        width: '191px'
                                    }}
                                    name="cc"
                                    value={member.cc}
                                    onChange={handleChange}>
                                </TextField>
                                <TextField
                                    helperText="Nombre completo"
                                    variant="outlined"
                                    size="small"
                                    label="Nombre"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        ml: '15px',
                                        width: '398px'
                                    }}
                                    name="nombre"
                                    value={member.nombre}
                                    onChange={handleChange}>
                                </TextField>
                            </Grid>
                            <Grid container direction="row" alignItems="center" justifyContent="left">
                                <TextField
                                    helperText="Número de teléfono"
                                    variant="outlined"
                                    size="small"
                                    label="Teléfono"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        width: '191px'
                                    }}
                                    name="telefono"
                                    value={member.telefono}
                                    onChange={handleChange}>
                                </TextField>
                                <TextField
                                    helperText="Lugar de residencia"
                                    variant="outlined"
                                    size="small"
                                    label="Dirección"
                                    margin="normal"
                                    fullWidth
                                    sx={{
                                        display: 'block',
                                        margin: '.8rem 0',
                                        ml: '15px',
                                        width: '191px'
                                    }}
                                    name="direccion"
                                    value={member.direccion}
                                    onChange={handleChange}>
                                </TextField>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    fullWidth
                                    sx={{
                                        mb:'24px',
                                        ml:'15px',
                                        width:'193px'
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