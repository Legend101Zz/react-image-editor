import { Grid,Paper, Button, Typography} from "@mui/material";
import React from "react";
import tshirt from './t_shirt.png'
import Productinfo from "./Productinfo";
import data from './More'
import ProductCard from "../../Layouts/Cards/ProductCard";
import Navbar from '../../Layouts/Navbar/Navbar'
import Footer from "../../Layouts/Footer/Footer";




export default function ProductDetailPage() {
  return (
    <div style={{maxWidth: '100%', overflowX: 'hidden'}} >
    <Navbar/>
    <div style={{ backgroundColor: "white" }}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={3} md={1.5} margin={3} >
          <img src={tshirt} alt="i" width="80%"style={{backgroundColor:'#D9D9D9',margin:'4%'}}/>
          <img src={tshirt} alt="i" width="80%" style={{backgroundColor:'#D9D9D9',margin:'4%'}}/>
          <img src={tshirt} alt="i" width="80%" style={{backgroundColor:'#D9D9D9',margin:'4%'}}/>
          <img src={tshirt} alt="i" width="80%" style={{backgroundColor:'#D9D9D9',margin:'4%'}}/>
        </Grid>

        <Grid item xs={6} md={6} style={{backgroundColor:'#D9D9D9'}} margin={3}>
          <img src={tshirt} alt="i" width="80%" style={{
              display: 'block', // Ensures the image takes up the entire width
              marginLeft: 'auto', // Center the image horizontally by setting left margin to auto
              marginRight: 'auto', // Center the image horizontally by setting right margin to auto
            }}/>
            <div style={{backgroundColor:'white',padding:'2%',justifyContent:'center'}}>
              <Button variant="contained" style={{paddingLeft: '10%',paddingRight:' 10%',marginLeft:'15%',backgroundColor:'#CBB428',borderRadius: '20px 0 0 20px',}}>Buy Now</Button>
              <Button variant="contained" style={{paddingLeft: '10%',paddingRight:' 10%',backgroundColor:'#CBB428',borderRadius: '0 20px 20px 0',}}>Add to Cart</Button>
            </div>
        </Grid>

        <Grid item xs={12} md={3} margin={2}>
            <Productinfo/>
        </Grid>
      </Grid>
      
      <div>
      <Typography variant="h5" style={{marginTop:"2%",marginLeft:'2%'}}>More from same artist</Typography>
      {
        <Grid container spacing={1} style={{marginLeft:'3%',marginTop:'2%'}}>
          {data.map((val) => (
            <Grid item sx={4} md={2} key={val.title}>
              <Paper>
                <ProductCard image={tshirt} title={val.title} description={val.description} price={val.price} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      }
      </div>
     
      <div>
      <Typography variant="h5" style={{marginTop:"2%",marginLeft:'2%'}}>More from other artist</Typography>
      { 
        <Grid container spacing={1} style={{marginLeft:'3%',marginTop:'2%'}} >
          {data.map((val) => (
            <Grid item md="2" key={val.title}>
              <Paper>
                <ProductCard image={tshirt} title={val.title} description={val.description} price={val.price} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      }
      </div>
    </div>
    <Footer textcol='white'/>
    </div>
    
  );
}
