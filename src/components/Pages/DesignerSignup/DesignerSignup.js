import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from '@mui/material';
import Nav2 from '../../Layouts/Navbar/Nav2';
import Footer from '../../Layouts/Footer/Footer';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    resumeDriveLink: '',
    portfolioLink: '',
    panCardNumber: '',
    paymentMethod: '',
    additionalInfo: '',
  });

  const handleFieldChange = (fieldName) => (event) => {
    setFormData({
      ...formData,
      [fieldName]: event.target.value,
    });
  };

  const getAdditionalInfoLabel = () => {
    switch (formData.paymentMethod) {
      case 'upi':
        return 'UPI ID';
      case 'bankTransfer':
        return 'Account Number';
      case 'other':
        return 'Mention Here';
      default:
        return '';
    }
  };

  return (
    <>
    <Nav2/>
    <div style={{backgroundColor:"white",paddingTop:'10vh',paddingBottom:'10vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Typography variant="h4" style={{marginTop:'5vh',marginBottom:'5vh'}}> Designer Signup</Typography>
        <div style={{width:'40vw',justifyContent:'center'}}>
        <TextField
            label="Full Name"
            fullWidth
            value={formData.fullName}
            onChange={handleFieldChange('fullName')}
            style={{marginTop:'2vh',marginBottom:'2vh'}}
        />
        <TextField
            label="Username"
            fullWidth
            value={formData.username}
            onChange={handleFieldChange('username')}
            style={{marginTop:'2vh',marginBottom:'2vh'}}
        />
        <TextField
            label="Email"
            fullWidth
            value={formData.email}
            onChange={handleFieldChange('email')}
            style={{marginTop:'2vh',marginBottom:'2vh'}}
        />
        <TextField
            label="Resume Drive Link"
            fullWidth
            value={formData.resumeDriveLink}
            onChange={handleFieldChange('resumeDriveLink')}
            style={{marginTop:'2vh',marginBottom:'2vh'}}
        />
        <TextField
            label="Portfolio Link"
            fullWidth
            value={formData.portfolioLink}
            onChange={handleFieldChange('portfolioLink')}
            style={{marginTop:'2vh',marginBottom:'2vh'}}
        />
        <TextField
            label="Pan Card Number"
            fullWidth
            value={formData.panCardNumber}
            onChange={handleFieldChange('panCardNumber')}
            style={{marginTop:'2vh',marginBottom:'2vh'}}
        />

        <FormControl fullWidth style={{ marginTop: '2vh', marginBottom: '2vh' }}>
            <Typography variant="subtitle2" style={{color:'gray'}}>Payment method</Typography>
        <InputLabel style={{}}></InputLabel>
        <Select
            value={formData.paymentMethod}
            onChange={handleFieldChange('paymentMethod')}
        >
            <MenuItem value="upi">UPI</MenuItem>
            <MenuItem value="bankTransfer">Bank Transfer</MenuItem>
            <MenuItem value="other">Other Method</MenuItem>
        </Select>
        </FormControl>



        <TextField
            label={getAdditionalInfoLabel()}
            fullWidth
            value={formData.additionalInfo}
            onChange={handleFieldChange('additionalInfo')}
            style={{marginTop:'2vh',marginBottom:'2vh'}}
        />

        <Button variant="contained" color="primary" onClick={() => console.log(formData)}  style={{ margin: 'auto', display: 'block',marginTop:'5vh',backgroundImage: "linear-gradient(to right, #A24D50, #4B1C36)",}}>
            Request for Being Designer
        </Button>
        </div>
    </div>
    <Footer bgcol="white" textcol="black"/>
    </>
  );
};

export default PaymentForm;
