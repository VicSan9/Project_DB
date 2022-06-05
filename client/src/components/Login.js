import React, { useState } from "react";
import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function Login() {

  const [login, setLogin] = useState({ user: '', password: '' })

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(login);
  try {
    const res = await fetch('http://localhost:4000/administrators/login', {
      method: 'POST',
      body: JSON.stringify(login),
      headers: {"content-Type": "application/json"}
    })  

    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
    
  }

  const handleChange = e => {
    console.log(e.target.name, e.target.value);
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }

    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={8}>
          <Card
            sx={{
              mt: 10,
              backgroundColor: '#fff',
              opacity: [0.8],
              '&:hover': {
                backgroundColor: '#fff',
                opacity: [1]
              }
            }}
            style={{
              padding: '4rem',
              boxShadow: '0px 0px 15px 0px'
            }}
          >
            <Typography
              component="h2"
              color="#000"
              fontSize="20px"
              fontWeight="bold"
              textAlign="center"
            >
              Iniciar Sección
            </Typography>
            <LockOpenIcon
              fontSize="large"
              sx={{
                display: 'block',
                margin: '8px 100px',
                width: 'auto',
                color: '#3498DB '
              }}
            >
            </LockOpenIcon>
            <CardContent
              width='500px'
            >
              <form onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  size="small"
                  label="User"
                  margin="none"
                  fullWidth
                  autoFocus
                  sx={{
                    display: 'block',
                    margin: '.8rem 0'
                  }}
                  name="user"
                  value={login.user}
                  onChange={handleChange}
                >
                </TextField>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Password"
                  type="password"
                  margin="nomal"
                  fullWidth
                  sx={{
                    display: 'block',
                    margin: '.8rem 0'
                  }}
                  name="password"
                  value={login.password}
                  onChange={handleChange}
                >
                </TextField>
                <Button
                  variant="contained"
                  type="submit"
                  justifyContent="center"
                  fullWidth
                >
                  Sign in
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid >
    )
}
