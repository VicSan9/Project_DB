import Navbar from './Navbar';
import { Container, Grid, Card, Box } from '@mui/material';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Home() {
    return (
      <Grid>
        <Navbar></Navbar>
        <Container>
          <Grid 
            container
            direction="column"
            alignItems="center"
            justifyContent="center">
            <Card
              sx={{
                mt: 8,
                backgroundColor: 'transparent',
              }}>
              <Box
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
                  size="500px">
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup variant="text" aria-label="text button group 2">
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
              </Box>
            </Card>
          </Grid>
        </Container>
      </Grid>  
    )
}
