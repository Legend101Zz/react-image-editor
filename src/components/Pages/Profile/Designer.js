import React from 'react'
import Navbar from '../../Layouts/Navbar/Navbar'
import profilePhoto from './profilePhoto.png'
import Typography from '@mui/material/Typography';
import FO_designer from './FO_designer';
import F_designer from './F_designer';
import { Button, Grid, Paper } from '@mui/material';
import ProductCard from '../../Layouts/Cards/ProductCard';
import shirt from '../../Layouts/Cards/t_shirt.png'
import Footer from '../../Layouts/Footer/Footer'
import MyCard from './MyCard';


const Designer = () => {
    const name = "Samamvay Arya";
    const followers = "300";
    const follow = "200";
    const username = "@samanvay"
  return (
    <div style={{background:'white'}}>
        <Navbar/>
        <div style={{backgroundColor:'#D9D9D9',height:'30vh'}}>
        </div>
        <div style={{height:'20vh'}}>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div style={{backgroundColor:'#fff',height:'40vh',width: '40vh',borderRadius:'50%',marginTop:'-11%',display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={profilePhoto} alt='pro_photo' style={{borderRadius:'50%',width:'70%'}}/>
                </div>
            </div>
            <div style={{ background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Typography variant="h6" style={{ fontWeight: 'bold'}} >
                        {name}
                        </Typography>
                        <Typography variant="body2" style={{color:'#A24D50',fontWeight: 'bold'}} >
                        {followers} followers
                        </Typography>
                        <Typography variant="body2" style={{color:'#A24D50',fontWeight: 'bold'}}>
                            {follow} following
                        </Typography>
                        <Typography variant="body2" style={{color:'#A24D50',fontWeight: 'bold'}}>
                            {username}
                        </Typography>
                    <Button variant="contained" color="primary" style={{paddingLeft:'10vw',paddingRight:'10vw',marginTop:'5%', backgroundColor:'#A24D50'}} >
                        FOLLOW
                    </Button>
                
            </div>

            <Typography variant='body2' style={{background:'white', paddingLeft:'6%',paddingTop:'5%',fontWeight:'bold'}}>From Designer</Typography>
            
            <div style={{maxWidth:'100%',background:'white',paddingTop:'2%',paddingLeft:'2%'}}>
                <Grid container spacing={1} style={{}}>
                    {F_designer.map((val) => (
                        <Grid item xs={3} md={2} key={val.title}>
                        <Paper>
                            <ProductCard image={shirt} title={val.title} description={val.description} price={val.price} />
                        </Paper>
                        </Grid>
                    ))}
                </Grid>
            </div>



            <Typography variant='body2' style={{background:'white', paddingLeft:'6%',paddingTop:'5%',fontWeight:'bold'}}>Other Designers</Typography>
            

            <div style={{maxWidth:'100%',background:'white',paddingTop:'4%',paddingLeft:'2%',paddingBottom:'10%'}}>
                <Grid container spacing={1} style={{}}>
                        <Grid item xs={3} md={2}>
                        <Paper>
                            <MyCard name="Samanvay Arya" imageSrc={profilePhoto} buttonText="Follow"/>
                        </Paper>
                        </Grid>
                        <Grid item xs={3} md={2}>
                        <Paper>
                            <MyCard name="Samanvay Arya" imageSrc={profilePhoto} buttonText="Follow"/>
                        </Paper>
                        </Grid>
                        <Grid item xs={3} md={2}>
                        <Paper>
                            <MyCard name="Samanvay Arya" imageSrc={profilePhoto} buttonText="Follow"/>
                        </Paper>
                        </Grid>
                </Grid>
            </div>

            <Typography variant='body2' style={{background:'white', paddingLeft:'6%',paddingTop:'5%',fontWeight:'bold'}}>From Other Designers</Typography>

            <div style={{maxWidth:'100%',background:'white',paddingTop:'2%',paddingLeft:'2%'}}>
                <Grid container spacing={1} style={{}}>
                    {FO_designer.map((val) => (
                        <Grid item xs={3} md={2} key={val.title}>
                        <Paper>
                            <ProductCard image={shirt} title={val.title} description={val.description} price={val.price} />
                        </Paper>
                        </Grid>
                    ))}
                </Grid>
            </div>


            <Footer bgcol="white" textcol="black"/>
        </div>
    </div>
  )
}

export default Designer
