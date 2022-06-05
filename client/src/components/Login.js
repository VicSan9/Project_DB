import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function login() {

 // const [login, setLogin] = useState({
 // })

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
  }

  const handleChange = e => {
    console.log(e.target.name, e.target.value);
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
                  sx={{
                    display: 'block',
                    margin: '.8rem 0'
                  }}
                  name="user"
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
