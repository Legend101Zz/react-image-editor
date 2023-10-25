import React,{useState} from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import { Share, Favorite } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Navbar from '../../Layouts/Navbar/Navbar';
import Footer from '../../Layouts/Footer/Footer';
import t_shirt from './t_shirt.png'
import Prices from '../../Layouts/Prices/Prices';

const products = [
  { id: 1, image: t_shirt, name: 'Game Over Black Man T-shirt', description: 'kdfjiadjf aijfkladkfj akldf alkdjflkaj dflkaj ;slfdjk;aj dflkajdklf a', price: 400, quantity: 1 },
  { id: 2, image: t_shirt, name: 'Game Over Black Man T-shirt', description: 'kdfjiadjf aijfkladkfj akldf alkdjflkaj dflkaj ;slfdjk;aj dflkajdklf a', price: 400, quantity: 1 },
  // Add more products here
];
const Orders = () => {
        const [ review,setReview] = useState('');
  return (
    <div className='cart_section'>
      <Navbar />

      <div style={{}}>
        <Grid container spacing={4} style={{ display: 'flex' }}>
          <Grid item xs={9} style={{marginRight:'8%',marginLeft:'8%'}}>
            <Grid container spacing={2}>
              {products.map((product) => (
                <Grid item xs={12} key={product.id} style={{ margin: '2%' }}>

                  <div style={{ display: 'flex', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', borderRadius: '10px',}}>
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
                      </div>
                    </div>

                    <div style={{marginTop:'4%'}}>
                        <Typography varient="subtitle2" style={{marginBottom:'5%'}}> Review</Typography>
                        <textarea
                            type="text"
                            placeholder="Write Something...."
                            style={{height:'100px',resize:'none'}}
                            onChange={(e)=>{setReview(e.target.value)}}
                            // You can add additional attributes and event handlers here
                          />
                        <Button variant="contained" style={{
                                paddingLeft: '20px', // Decrease the left padding
                                paddingRight: '20px', // Decrease the right padding
                                borderRadius: '5px', // Adjust the border radius
                                fontSize: '12px', // Decrease the font size
                                background: '#A24D50 linear-gradient(to bottom, #A24D50 0%, #4B1C36 100%)',
                                textTransform: 'none',
                                marginLeft:'35%',
                                marginTop:'2%'

                        }}>Review</Button>
                        
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column',marginTop:'2%',marginLeft:'4%',marginRight:'1%'}}>
                      <div style={{marginTop:'10%'}}>
                        <IconButton
                          style={{ backgroundColor: '#4B1C36', color: 'white',fontSize: '16px'}}
                          onClick={() => {
                            // Handle sharing logic here
                            // You can open a modal or implement sharing functionality
                          }}
                        >
                          <Share />
                        </IconButton>
                      </div>
                      <div style={{marginTop:'10%'}}>
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

         
        </Grid>
      </div>

      <Footer bgcol="white" textcol="black" />
    </div>
  );
}

export default Orders;
