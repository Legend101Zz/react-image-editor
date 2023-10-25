import React from 'react';
import { Grid} from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import tshirt from './t_shirt.png';

const Productinfo = () => {
  

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        {/* ... Your existing grid content ... */}

        {/* Carousels */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          {/* First Carousel */}
          <Carousel
            axis="vertical"
            showArrows={true}
            showIndicators={true}
            autoPlay={false}
            infiniteLoop={true}
          >
            <div>
              <img src={tshirt} alt="carousel 1" />
            </div>
            <div>
              <img src={tshirt} alt="carousel 2" />
            </div>
            {/* Add more carousel items as needed */}
          </Carousel>

          {/* Second Carousel */}
          <Carousel
            axis="vertical"
            showArrows={true}
            showIndicators={true}
            autoPlay={false}
            infiniteLoop={true}
          >
            {/* Add carousel items */}
            <div>
              <img src={tshirt} alt="carousel 3" />
            </div>
            <div>
              <img src={tshirt} alt="carousel 4" />
            </div>
            {/* Add more carousel items as needed */}
          </Carousel>
        </div>
      </Grid>
    </div>
  );
};

export default Productinfo;
