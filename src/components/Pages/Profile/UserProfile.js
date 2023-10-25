import React from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import Footer from '../../Layouts/Footer/Footer';
import { Box, Grid, Paper, Typography} from '@mui/material';
import profilePhoto from './profilePhoto.png'
import Card from './Card'
import wishlist from './wishlist.png';
import sell from './SellYourArt.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import DescriptionIcon from '@mui/icons-material/Description';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Link} from 'react-router-dom'



const DesignerProfile = () => {
  let username = localStorage.getItem('username')?localStorage.getItem('username'):"";
  let email = localStorage.getItem('email')?localStorage.getItem('email'):"";
  let following = localStorage.getItem('following')?localStorage.getItem('following'):"0";
  let number = localStorage.getItem('number')?localStorage.getItem('number'):'XXXXXXXXXX';
  let name = localStorage.getItem('name')?localStorage.getItem('name'):'Unknown';
  let about = localStorage.getItem('about')?localStorage.getItem('about'):'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book';
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navbar />
      <Grid container spacing={6} style={{ padding: '20px' }}>
        <Grid item xs={3} sm={3} md={3}>
          <Paper style={{ textAlign: 'center' }}>
            <div style={{padding: '20px'}}>
              <img src={profilePhoto} alt='profile_image' style={{borderRadius:'50%',marginTop:'10px',marginBottom:'10px'}}/>
              <Typography varient="subtitle2" style={{color:'#A24D50'}} > {following} following</Typography>
              <Typography variant="h5" fontWeight={700} style={{ }}>{name}</Typography>
              <Typography variant="subtitle2" fontWeight={700} style={{marginTop:'5px',marginBottom:'5px'}}>{email}</Typography>
              <Typography variant="subtitle2" fontWeight={700} style={{marginTop:'5px',marginBottom:'5px'}}>+91 {number}</Typography>
              <Typography variant="subtitle2" fontWeight={700} style={{marginTop:'5px',marginBottom:'5px'}}>{username}</Typography>
              <Typography variant="subtitle1" fontWeight={700} style={{marginTop:'5px',marginBottom:'5px', textAlign: 'left'}}>About</Typography>
              <Typography variant="body2" fontWeight={300} style={{marginTop:'5px',marginBottom:'5px', textAlign: 'left'}}>
              {about}
              </Typography>
            </div>

            <div style={{marginTop:'30px'}}>
                <Box style={{borderTop:'1px solid lightgray'}}>
                  <Typography variant="subtitle1" style={{textAlign:'left',marginTop:'6px',marginBottom:'6px',marginLeft:'6px'}} ><EditIcon style={{fontSize:'20px',marginRight:'4px',marginBottom:'-4px'}} />
                     <Link to='/EditProfile' style={{textDecoration:'none',color:'black'}}>Edit Profile</Link></Typography>
                </Box>
                <Box style={{borderTop:'1px solid lightgray',borderBottom:'1px solid lightgray'}}>
                  <Typography variant="subtitle1" style={{textAlign:'left',marginTop:'6px',marginBottom:'6px',marginLeft:'6px'}} > <LocationOnIcon style={{fontSize:'20px',marginBottom:'-4px',marginRight:'4px'}} />Adderess</Typography>
                </Box>
                <Box style={{marginTop:'30px',borderTop:'1px solid lightgray',borderBottom:'1px solid lightgray'}}>
                  <Typography variant="subtitle1" style={{textAlign:'left',marginTop:'6px',marginBottom:'6px',marginLeft:'6px'}} ><DescriptionIcon style={{fontSize:'20px',marginBottom:'-4px',marginRight:'4px'}}/>
 Terms and Conditions</Typography>
                </Box>

                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius={8} // Add rounded corners
                  marginTop={10}
                  marginBottom={10}
                >
                  <InstagramIcon fontSize="large" style={{ marginRight: '16px', color: '#E1306C' }} />
                  <FacebookIcon fontSize="large" style={{ color: '#1877F2'}} />
                </Box>

                <Box >
                  <Typography style={{paddingBottom:'5%'}}>Copyright@eye_eye_tee</Typography>
                </Box>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={3} sm={3} md={3} style={{}}>
            <Card image={sell} name={"Sell Your Art"}/>
        </Grid>

        <Grid item xs={3} sm={3} md={3}>
          <Card image={wishlist} name={"WishList"}/>
        </Grid>
      </Grid>

      <Footer bgcol='white' textcol="black" />
    </div>
  );
};

export default DesignerProfile;
