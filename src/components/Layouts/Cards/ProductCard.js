import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Paper } from "@mui/material";
import Prices from "../Prices/Prices";

const ProductCard = ({ image, title, description, price }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        style={{ objectFit: "filled", height: "60%", marginTop: "-1%" }}
      />

      <div
        style={{
          position: "relative",
          top: "-205px", // Adjust the top position as needed
          right: "10px", // Adjust the right position as needed
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Paper elevation={2} style={{ borderRadius: "100%" }}>
          <IconButton
            aria-label="share"
            size="small"
            width="5%"
            aspectRatio="1:1"
          >
            <ShareIcon />
          </IconButton>
        </Paper>
        <Paper
          elevation={2}
          style={{
            borderRadius: "100%",
            marginTop: "4%",
            backgroundColor: "#F5F5F5",
          }}
        >
          <IconButton
            aria-label="add to wishlist"
            size="small"
            width="5%"
            aspectRatio="1:1"
          >
            <FavoriteIcon />
          </IconButton>
        </Paper>
      </div>

      <CardContent style={{ marginTop: "-35%", marginBottom: "0%" }}>
        <Typography variant="subtitle1" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          paragraph
          style={{ fontSize: "13" }}
        >
          {description.substring(0, 40) + "..."}
        </Typography>
        {/* <Typography variant="subtitle2" style={{marginTop:"-3%", marginBottom:'0%'}} >Price: ${price}</Typography> */}

        <Prices price="40" original_price="400" discount="90%" />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
