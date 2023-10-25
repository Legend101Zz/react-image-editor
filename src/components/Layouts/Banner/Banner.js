import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import banner_img from './banner_img.png';

const MyComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '40vh',
        // padding: '16px', // Add padding to all sides
        backgroundColor: 'rgba(0, 0, 0, 0)', // Set a transparent background
      }}
    >
      <Box>
        <Typography variant="h2" component="h2" gutterBottom style={{color:"white", marginLeft:"6%"}}>
        Shopping And 
        Designing Store
        </Typography>
        <Typography variant="subtle2" component="subtle2" style={{color:"white",marginLeft:"6%"}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.Tempore officia nulla rerum ducimu
        </Typography>
      </Box>
      {/* <img
        src={banner_img}
        alt='banner'
        style={{ height: '80%'}} // Adjust image height and spacing
      /> */}
    </Box>
  );
};

export default MyComponent;
