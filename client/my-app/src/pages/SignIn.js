import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import { useState } from 'react';
import Axios from 'axios';


const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    overflowY: "hidden",
    backgroundImage: `url(${'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
}));
const theme = createTheme();

export default function SignIn(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const login = () => {
    setErrorMessage(null);
    setSuccessMessage(null);
    Axios.post('http://localhost:3001/api/login-user', {
      email: email,
      password: password
    }).then((response) => {
      console.log(response);
      if(response.status == 200) {
        // const authToken = response.headers['x-auth-token']
        const user = response.data.user;
        // localStorage.setItem('x-auth-token', authToken);
        // localStorage.setItem('reg-no', student.reg_no);
        localStorage.setItem('email', user.email);
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('user', 'user');
        setSuccessMessage("Log In Successful");
        // window.location.href="/Rooms";
      }
    }).catch((e) => {
      if (e.response && e.response.data) {
        const errorMessage = e.response.data.err || e.response.data.message;
        console.log(errorMessage);
        setErrorMessage(errorMessage);
      }
    })
  }

  return (
<Grid container component="main" className={classes.root}>
    <CssBaseline />
<ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Signin
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={login}
            >
              Log In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/Signup"} variant="body2" >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </Grid>
  );
}