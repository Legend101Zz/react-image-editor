import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import {Link,useNavigate} from 'react-router-dom'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {API} from '../../../service/api'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from './logo.png'


const theme = createTheme();



const signupinitialData = {
  username:'',
  email:''
}

function Signup() {

  const [signupdata,setSignupdata] = useState(signupinitialData);
  const navigate = useNavigate();
  const onInputChange = (e)=>{
    setSignupdata({...signupdata,[e.target.name]:e.target.value})
  }

  const signupUser = async()=>{
    let response = await API.userSignup(signupdata);
    console.log(response);
    if(response.isSuccess){
      if(response.data.status===200)
      alert("user created successfully  check your email for login credentials");
      else if(response.data.status===201)
      alert("user already exist please check your email for login creadentials")
      else
      navigate('/error');

      navigate('/login');
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        columns={12}
      >
        <img src={logo} alt={'logo'} style={{
         width: "20%", // Default width for small screens
         [`@media (minwidth: 400px)`]: {
           width: "60%", // Width for medium screens and above
         },
         [`@media (minwidth: 600px)`]: {
           width: "50%", // Width for medium screens and above
         },
         [`@media (minwidth: 800px)`]: {
           width: "20%", // Width for medium screens and above
         },
         [`@media (minwidth: 960px)`]: {
           width: "20%", // Width for large screens
         },
         [`@media (minwidth: 1200px)`]: {
          width: "10%", // Width for screens greater than 960px
        },
      }}/>
        <Paper
          elevation={3}
          sx={{
            borderRadius: "10px",
            width: "80%", // Default width for small screens
            [`@media (min-width: 400px)`]: {
              width: "60%", // Width for medium screens and above
            },
            [`@media (min-width: 600px)`]: {
              width: "50%", // Width for medium screens and above
            },
            [`@media (min-width: 800px)`]: {
              width: "30%", // Width for medium screens and above
            },
            [`@media (min-width: 960px)`]: {
              width: "25%", // Width for large screens
            },
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            paddingY="10%"
            paddingX="8%"
          >
            <Typography
              variant="h5"
              component="h1"
              sx={{ marginBottom: 2 }}
              fontWeight="600"
            >
              Sign Up
            </Typography>


            <TextField
              label="Userame"
              sx={{ margin: "2% 0% 5% 0%", width: "84%" }}
              margin="normal"
              size="small"
              variant="outlined"
              name="username"
              onChange={(e)=>onInputChange(e)}
            />
            <TextField
              label="Email"
              sx={{ margin: "2% 0% 5% 0%", width: "84%" }}
              margin="normal"
              size="small"
              variant="outlined"
              name="email"
              onChange={(e)=>onInputChange(e)}
            />
            


            <Button
              variant="contained"
              sx={{ margin: "2% 0% 15% 0%", width: "60%" }}
              onClick={()=>signupUser()}
            >
              Sign Up
            </Button>
            <Link
              href="#"
              variant="body2"
              style={{ textDecoration: "none", marginBottom: "2%",fontSize:"15px",fontWeight:"400px"}}
            >
              Forgot Password?
            </Link>
            <Grid item>
              <Typography
                variant="string"
                sx={{ marginBottom: 2, marginRight: 1 }}
                fontWeight="600"
              >
                Already have an account?
              </Typography>
              <Link to="/login" variant="body2" style={{ textDecoration: "none",fontSize: "15px",color:"551A8B",fontWeight:"600"}}>
                Login
              </Link>
            </Grid>

            <Grid item>
              <Link to="/" variant="body2" style={{ textDecoration: "none",fontSize: "15px",color:"551A8B",fontWeight:"600"}}>
                Home Page
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
}

export default Signup;
