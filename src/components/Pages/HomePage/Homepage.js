import React from 'react'
// import Navbar from '../../Layouts/Navbar/Navbar'
import {Link} from "react-router-dom";
import ProductCard from '../../Layouts/Cards/ProductCard';
import { Grid, Paper } from '@mui/material';
import shirt from '../../Layouts/Cards/t_shirt.png'
import Banner from '../../Layouts/Banner/Banner'
import Footer from '../../Layouts/Footer/Footer'

import data from '../data'
import Nav2 from '../../Layouts/Navbar/Nav2';
const Homepage = () => {
  return (
    <>
    <Nav2/>
    <Banner/>
        <div style={{maxWidth:'100%',marginLeft:'4%',marginRight:'4%'}}>
        <Grid container spacing={1}>
        {data.map((val, index) => (
          <Grid item xs={4} md={2} key={index}>
            <Paper>
              <Link to='/product_details' style={{textDecoration:'none'}}>
                <ProductCard image={shirt} title={val.title} description={val.description} price={val.price} />
              </Link>
            </Paper>
          </Grid>
         ))} 
        </Grid>
        </div>
    <Footer bgcol="" textcol="white"/>

    </>
  )
}

export default Homepage
