import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Button, // Import Button from MUI
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./logo.png";
import NavIcons from "../NavbarIcons/NavIcons";
import { Link } from "react-router-dom";

const Nav2 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "white",
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.06)",
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" style={{ color: "purple" }}>
          <img
            src={logo}
            alt="site_logo"
            style={{ width: "60px", margin: "2px" }}
          />
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {isSmallScreen ? (
            <IconButton edge="start" color="black" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Typography
                variant="h6"
                style={{ color: "black", marginRight: "16px" }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  Home
                </Link>{" "}
              </Typography>
              <Typography
                variant="h6"
                style={{ color: "black", marginRight: "16px", marginLeft: "15px" }}
              >
                <Link
                  to="/categories"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Categories
                </Link>
              </Typography>
              <Typography
                variant="h6"
                style={{ color: "black", marginRight: "16px", marginLeft: "15px" }}
              >
                <Link to="/Deals" style={{ textDecoration: "none", color: "black" }}>
                  Deals
                </Link>{" "}
              </Typography>
              <Typography
                variant="h6"
                style={{ color: "black", marginRight: "16px", marginLeft: "15px" }}
              >
                <Link to="/new" style={{ textDecoration: "none", color: "black" }}>
                  New
                </Link>
              </Typography>
            </>
          )}


          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Categories</MenuItem>
            <MenuItem onClick={handleMenuClose}>Deals</MenuItem>
            <MenuItem onClick={handleMenuClose}>What's new</MenuItem>
          </Menu>
        </div>
        <div>
          <TextField
            variant="outlined"
            placeholder="Search here"
            borderRadius={50}
            style={{
              width: "100%",
              maxWidth: 300,
            }}
          />
        </div>

        <div>
            {/* Add "Sell Your Art" button here */}
          <Button
            variant="contained"
            style={{
                marginRight: "16px",
                backgroundImage: "linear-gradient(to right, #A24D50, #4B1C36)",
                color: "white", // Set the text color to white for better contrast
              }}
            component={Link}
            to="/sell" // Replace with the actual link for selling your art
          >
            Sell Your Art
          </Button>
        </div>

        <div>
          <NavIcons />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Nav2;
