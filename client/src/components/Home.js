import Navbar from './Navbar';
import { Container, Grid, Card, Box, Typography } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InventoryIcon from '@mui/icons-material/Inventory';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import InfoIcon from '@mui/icons-material/Info';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate()

  const toInventory = e => {
    navigate("/inventory")
  }

  const toIn = e => {
    navigate("/in")
  }

  const toOut = e => {
    navigate("/out")
  }

  const toInforms = e => {
    navigate("/informs")
  }

  const toSearch = e => {
    navigate("/search")
  }

  const toSuppliers = e => {
    navigate("/suppliers")
  }

  return (
    <Grid>
      <Navbar></Navbar>
      <Container>
        <Grid 
          container
          direction="column"
          alignItems="center"
          justifyContent="center">
          <Typography
            mt="20px"
            component="h2"
            color="#000"
            fontSize="38px"
            fontWeight="bold">
          Tienda el Palmar
          </Typography>
          <Card
            sx={{
              mt: 5,
              backgroundColor: 'transparent',
              boxShadow: 'none'
            }}>
            <Box
              color = '#fff'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                  m: 1,
                },
              }}
            >
              <ButtonGroup 
                variant="text" 
                aria-label="text button group"
              >
                <Button
                  onClick={toInventory}
                  style={{
                    direction: 'column',
                    color: '#000',
                    padding:'50px 75px',
                    borderColor: '#000'
                  }}>
                  <Grid
                    container
                    direction="column"
                    alignItems="center">
                    <Typography
                      fontSize='14px'
                      fontWeight= "bold"
                    >
                      Inventario
                    </Typography>
                    <InventoryIcon sx={{margin:'5px'}}/>
                  </Grid>
                </Button>
                <Button
                  onClick={toIn}
                  style={{
                    color: '#000',
                    padding:'50px 75px',
                    borderColor: '#000'
                  }}>
                  <Grid
                    container
                    direction="column"
                    alignItems="center">
                    <Typography
                      fontSize='14px'
                      fontWeight= "bold"
                    >
                      Entradas
                    </Typography>
                    <ArrowCircleRightIcon sx={{margin:'5px'}}/>
                  </Grid>
                </Button>
                <Button
                  onClick={toOut}
                  style={{
                    color: '#000',
                    padding:'50px 75px'
                  }}>
                  <Grid
                    container
                    direction="column"
                    alignItems="center">
                    <Typography
                      fontSize='14px'
                      fontWeight= "bold"
                    >
                      Salidas
                    </Typography>
                    <ArrowCircleLeftIcon sx={{margin:'5px'}}/>
                  </Grid>
                </Button>
              </ButtonGroup>
              <ButtonGroup 
                variant="text" 
                aria-label="text button group 2">
                <Button
                  onClick={toInforms}
                  style={{
                    color: '#000',
                    padding:'50px 75px',
                    borderColor: '#000'
                  }}>
                  <Grid
                    container
                    direction="column"
                    alignItems="center">
                    <Typography
                      fontSize='14px'
                      fontWeight= "bold"
                    >
                      Informes
                    </Typography>
                    <InfoIcon sx={{margin:'5px'}}/>
                  </Grid>
                </Button>
                <Button
                  onClick={toSuppliers}
                  style={{
                    color: '#000',
                    padding:'50px 63px',
                    borderColor: '#000'
                  }}>
                  <Grid
                    container
                    direction="column"
                    alignItems="center">
                    <Typography
                      fontSize='14px'
                      fontWeight= "bold"
                    >
                      Proveedores
                    </Typography>
                    <AddBoxIcon sx={{margin:'5px'}}/>
                  </Grid>
                </Button>
                <Button
                  onClick={toSearch}
                  style={{
                    color: '#000',
                    padding:'50px 57px'
                  }}>
                  <Grid
                    container
                    direction="column"
                    alignItems="center">
                    <Typography
                      fontSize='14px'
                      fontWeight= "bold"
                    >
                      Consultas
                    </Typography>
                    <SearchIcon sx={{margin:'5px'}}/>
                  </Grid>
                </Button>
              </ButtonGroup>
            </Box>
          </Card>
        </Grid>
      </Container>
    </Grid>  
  )
}
