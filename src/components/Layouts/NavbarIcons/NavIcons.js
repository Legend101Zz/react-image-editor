import React, { useState, useEffect } from 'react';
import { Box, IconButton,Typography} from '@mui/material';
import { ShoppingCart, AccountCircle, ExitToApp} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const  NavIcons= () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('username'));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('username'));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('/');
  };
  return (
    <Box display='flex'>
      {isLoggedIn ? (
        <>
        <Link to="/cart">
          <IconButton style={{ color: 'black', marginRight: '12px' }}>
            <ShoppingCart color='black' />
          </IconButton>
        </Link>
        <Link to="/userProfile">
          <IconButton>
            <AccountCircle style={{ color: 'black', marginRight: '12px' }} />
          </IconButton>
        </Link>
        <IconButton onClick={handleLogout}>
          <ExitToApp style={{ color: 'black' }} />
        </IconButton>
        </>
      ) : (
        <Typography variant="button" style={{ color: "purple",textTransform: "none" }}>
        <Link to='/login' style={{textDecoration:'none'}}>Login Or SignUp</Link>
        </Typography>
      )}
    </Box>
  );
};

export default NavIcons;
