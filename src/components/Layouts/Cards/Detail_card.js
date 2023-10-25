import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';


const Detail_card = ({ image, title, description, price }) => {
  return (
    <Card className="product-card">
      <CardMedia
        component="img"
        image={image}
        alt={title}
        style={{ objectFit: 'filled',height:"300px" }}
      />
      

      <div
        style={{
          position: 'relative',
          top: '-300px', // Adjust the top position as needed
          right: '10px', // Adjust the right position as needed
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <IconButton aria-label="share" size="small">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="add to wishlist" size="small" style={{ marginTop: '10px' }}>
          <FavoriteIcon />
        </IconButton>
      </div>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        <Typography variant="subtitle1">
          Price: ${price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Detail_card;
