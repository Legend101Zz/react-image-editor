import React from "react";
import { Grid, Typography,Paper } from "@mui/material";
const Prices = ({ price, original_price, discount,circleRadius }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item xs={3} >
        <Typography
          variant="body1"
          fontWeight={500}
        >
          Rs.{price}/-
        </Typography>
      </Grid>
      <Grid item xs={3}>
      <Typography
        variant="caption"
        style={{
          textDecoration: "line-through",
        }}
      >
        Rs.{original_price}/-
      </Typography>
      </Grid>
      <Grid item xs={4}>
      <Paper elevation={3} style={{backgroundColor:'#000',width:{circleRadius},height:{circleRadius},borderRadius:{circleRadius},padding:'2%'}}>
          <Typography
            variant="body2"
            fontWeight={400}
            style={{
              textAlign:'center',
              color: "white",
            }}
          >
            {discount} OFF
          </Typography>
          </Paper>
      </Grid>
    </Grid>
  );
};

export default Prices;
