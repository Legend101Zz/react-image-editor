import { Button } from '@mui/material';
import React from 'react'

const Card = ({image,name}) => {
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        maxWidth:'300px',
        backgroundColor:'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:'20px',
        paddingBottom:'20px'
        }}>
        <img src={image} alt='button_image' style={{width:'200px',marginBottom:'4%'}}/>
        <Button style={{backgroundColor:'#A24D50',paddingLeft:'20%',paddingRight:'20%',textTransform: 'none',color:'white'}}>{name}</Button>
    </div>
  )
}

export default Card;
