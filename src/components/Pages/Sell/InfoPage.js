import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom'; 
const InfoPage = () => {
    const navigate = useNavigate(); // Initialize the history object

    const handleGoBackClick = () => {
        // Use history.push to navigate to the homepage ("/")
       navigate('/')
    };
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="80vh"
            style={{backgroundColor:"white"}} 
        >
            <Typography variant="h2" style={{ fontWeight: 'bold',marginBottom:'10vh'}}  >You are not a Designer</Typography>
            <Button variant="contained"  style={{fontWeight: 'bold',marginBottom:'5vh',textTransform:'none',padding:'10px 30px 10px 30px',backgroundImage:'linear-gradient(to right, rgb(162, 77, 80), rgb(75, 28, 54))' }}  onClick={handleRegisterClick}>
                Register As a Designer
            </Button>
            <Button variant="outlined" style={{fontWeight: 'bold',textTransform:'none',padding:'5px 30px 5px 30px',borderColor: 'rgb(75, 28, 54)',color:'rgb(162, 77, 80)'}} color="secondary" onClick={handleGoBackClick}>
                Go Back
            </Button>
        </Box>
    );
};

const handleRegisterClick = () => {
    // Handle the "Register as a Designer" button click event here.
    console.log('Register as a Designer button clicked');
};


export default InfoPage;
