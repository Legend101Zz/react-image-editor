import { useState } from "react";
import { Paper, Typography, TextField, Button, Grid } from "@mui/material";
import { Link,useNavigate} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { API } from "../../../service/api";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from "./logo.png";
const theme = createTheme();

const loginInitialValues = {
  email: "",
  password: "",
};

// const userdata = {
//   _id:"",
//   addresses:"",
//   email:"",
//   following:"",
//   isDesigner:"",
//   username:""
// }

function Login() {
  const [logindata, setLogindata] = useState(loginInitialValues);


  const navigate = useNavigate();

  const onInputChange = (e) => {
    setLogindata({ ...logindata, [e.target.name]: e.target.value });
  };

  const handleLogin = async()=>{
    const response = await API.LoginApi(logindata);
    console.log(response.data.status);
    if(response.isSuccess){
      // const {_id,addresses,email,following,isDesigner,username} = useData(response.data.data.data);
      localStorage.setItem("_id", response.data.data.data._id);
      localStorage.setItem("username", response.data.data.data.username);
      localStorage.setItem("email", response.data.data.data.email);
      localStorage.setItem("addresses", response.data.data.data.addresses);
      localStorage.setItem("isDesigner", response.data.data.data.isDesigner);
      localStorage.setItem("following", response.data.data.data.following);


      // userdata._id = response.data.data.data._id;
      // userdata.addresses = response.data.data.data.addresses;
      // userdata.email = response.data.data.data.email;
      // userdata.addresses = response.data.data.data.addresses;
      // userdata.addresses = response.data.data.data.addresses;
      // userdata.username = response.data.data.data.username;

      // console.log(userdata);

      navigate("/");

    }
    else{
      alert(response.msg);
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
        {/* Back Button
        <Box position="absolute" top={0} left={0} padding={2}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<ArrowBackIcon />}
            onClick={() => {
              // Handle the back button click here
            }}
          >
            Back
          </Button>
        </Box> */}
        <img
          src={logo}
          alt={"logo"}
          style={{
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
          }}
        />
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
              Log In
            </Typography>
            <TextField
              label="Email"
              sx={{ margin: "2% 0% 5% 0%", width: "84%" }}
              margin="normal"
              size="small"
              variant="outlined"
              onChange={(e) => {
                onInputChange(e);
              }}
              name="email"
            />
            <TextField
              label="Password"
              sx={{ margin: "2% 0% 5% 0%", width: "84%" }}
              margin="normal"
              size="small"
              type="password"
              variant="outlined"
              onChange={(e) => {
                onInputChange(e);
              }}
              name="password"
            />
            <Button
              variant="contained"
              sx={{ margin: "2% 0% 15% 0%", width: "60%" }}
              onClick={()=>handleLogin()}
            >
              Log In
            </Button>
            <Link
              href="#"
              variant="body2"
              style={{
                textDecoration: "none",
                marginBottom: "2%",
                fontSize: "15px",
                fontWeight:"400px"
              }}
            >
              Forgot Password?
            </Link>
            <Grid item>
              <Typography
                variant="string"
                sx={{ marginBottom: 2, marginRight: 1 }}
                fontWeight="600"
              >
                Don't have an account?
              </Typography>
              <Link
                to="/signup"
                variant="body2"
                style={{
                  textDecoration: "none",
                  fontSize: "15px",
                  color: "551A8B",
                  fontWeight: "600",
                }}
              >
                Sign Up
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

export default Login;
