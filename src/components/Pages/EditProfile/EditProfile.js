import React, { useState } from 'react';
import { Typography, TextField, TextareaAutosize, Button } from '@mui/material';
import Nav2 from '../../Layouts/Navbar/Nav2';
import Footer from '../../Layouts/Footer/Footer';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: localStorage.getItem('email')?localStorage.getItem('email'):'',
    phoneNumber: '',
    username: localStorage.getItem('username')?localStorage.getItem('username'):'',
    about: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    <Nav2/>
    <div style={{backgroundColor:'white',display:'flex',justifyContent:'center'}}>
    <div style={{maxWidth:'40vw',marginTop:'15vh',marginBottom:'15vh'}}>
      <Typography variant="h4"  style={{display:'flex',justifyContent:'center'}} >Edit Profile</Typography>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextareaAutosize
        name="about"
        value={formData.about}
        onChange={handleChange}
        rowsMin={4}
        placeholder="About"
        style={{ width:'30vw',height:'20vh',resize:'none' }}
      />
      <TextField
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
        Save
      </Button>
      </div>
    </div>

    <Footer bgcol="white" textcol="black" />
    </>
  );
};

export default EditProfile;
