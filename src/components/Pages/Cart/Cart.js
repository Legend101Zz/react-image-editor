import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import { Share, Favorite } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Navbar from '../../Layouts/Navbar/Navbar';
import './Cart.css'
import Footer from '../../Layouts/Footer/Footer';
import t_shirt from './t_shirt.png'
import Prices from '../../Layouts/Prices/Prices';

const products = [
  { id: 1, image: t_shirt, name: 'Game Over Black Man T-shirt', description: 'kdfjiadjf aijfkladkfj akldf alkdjflkaj dflkaj ;slfdjk;aj dflkajdklf a', price: 400, quantity: 1 },
  { id: 2, image: t_shirt, name: 'Game Over Black Man T-shirt', description: 'kdfjiadjf aijfkladkfj akldf alkdjflkaj dflkaj ;slfdjk;aj dflkajdklf a', price: 400, quantity: 1 },
  // Add more products here
];

const Cart = () => {
  const calculateTotal = () => {
    let totalItems = 0;
    let totalAmount = 0;

    products.forEach((product) => {
      totalItems += product.quantity;
      totalAmount += product.price * product.quantity;
    });

    return { totalItems, totalAmount };
  };

  const { totalItems, totalAmount } = calculateTotal();

  return (
    <div className='cart_section'>
      <Navbar />

      <div style={{}}>
        <Grid container spacing={4} style={{ display: 'flex' }}>
          <Grid item xs={7} style={{marginRight:'8%'}}>
            <Grid container spacing={2}>
              {products.map((product) => (
                <Grid item xs={12} key={product.id} style={{ margin: '2%' }}>

                  <div style={{ display: 'flex', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.45)', borderRadius: '10px',}}>
                    <div style={{maxWidth:'200px'}}>
                      <img src={product.image} alt="pro_img" style={{width:'100%'}}/>
                    </div>



                    <div style={{ marginLeft:'12%',marginTop:'5%',marginBottom:'5%',marginRight:'5%'}}>

                      <div style={{maxWidth:'300px'}}>
                        <Typography variant='h6' style={{ fontWeight: 700 }}>{product.name}</Typography>
                      </div>

                      <div style={{ marginLeft:'5%' , marginTop:'5%'}}>

                        <div style={{maxWidth:'400px',marginBottom:'5%'}}>
                          <Typography variant='subtitle2' > price: {product.description}</Typography>
                        </div>

                        <div style={{marginTop:'5%',marginBottom:'5%'}}>
                          <Prices price='40' original_price='400' discount='90%' />
                        </div>

                        {/* button  */}
                        <div style={{backgroundColor:'white',justifyContent:'center'}}>
                          <Button variant="contained" style={{backgroundColor:'#A24D50',paddingLeft:'10%',paddingRight:'10%',borderRadius: '5px 0 0 5px',}}>Remove</Button>
                          <Button variant="contained" style={{backgroundColor:'#4B1C36',paddingLeft:'10%',paddingRight:'10%',borderRadius: '0 5px 5px 0',}}>Buy Now</Button>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column',marginTop:'2%',marginLeft:'4%'}}>
                      <div style={{margin:'4%'}}>
                        <IconButton
                          style={{ backgroundColor: '#4B1C36', color: 'white',}}
                          onClick={() => {
                            // Handle sharing logic here
                            // You can open a modal or implement sharing functionality
                          }}
                        >
                          <Share />
                        </IconButton>
                      </div>
                      <div style={{margin:'4%'}}>
                      <IconButton
                        style={{ backgroundColor: '#A24D50', color: 'white' }}
                        onClick={() => {
                          // Handle adding to wishlist logic here
                          // You can add the product to the user's wishlist
                        }}
                      >
                        <Favorite />
                      </IconButton>
                      </div>
                    </div>

                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={3} style={{ marginTop: '3%',marginLeft:'5%', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', borderRadius: '10px', maxHeight: '300px'}}>
            <div style={{height:'300px'}}>
              <div style={{margin:'3%'}}>
              <Typography variant="h6" style={{ fontWeight: 700 }}>Summary</Typography>
              </div>
              
              <div style={{margin:'3%'}}>
              <Typography>Total Items: {totalItems}</Typography>
              </div>
              <div style={{margin:'3%'}}>
              <Typography>Total Amount: {totalAmount} Rs</Typography>
              </div>
              <div style={{margin:'3%'}}>
              <Typography>Total Discount: 720Rs</Typography>
              </div>
              <div style={{margin:'3%'}}>
              <Typography>Total Payable Amount: 80 Rs</Typography>
              </div>

              <div style={{backgroundColor:'white',justifyContent:'center',marginTop:'8%'}}>
                <Button variant="contained" style={{backgroundColor:'#A24D50',paddingLeft:'10%',paddingRight:'10%',borderRadius: '5px 0 0 5px',}}>Add More</Button>
                <Button variant="contained" style={{backgroundColor:'#4B1C36',paddingLeft:'10%',paddingRight:'6%',borderRadius: '0 5px 5px 0',}}>CheckOut Now</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <Footer bgcol="white" textcol="black" />
    </div>
  );
};

export default Cart;
