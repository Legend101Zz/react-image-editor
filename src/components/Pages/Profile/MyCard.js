import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const MyCard = ({ name, imageSrc, buttonText }) => {
  return (
    <Card>
      <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h6">{name}</Typography>
      </CardContent>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CardMedia
          component="img"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
          src={imageSrc}
          alt="Image"
        />
      </div>
      <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" color="primary" style={{backgroundColor:'#A24D50'}}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}

export default MyCard;
