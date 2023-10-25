import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

const Footer = ({bgcol,textcol}) => {
  // const col = bcol?bcol:'rgba(0,0,0,0)';

  return (
    <Box
      sx={{
        backgroundColor:bgcol,
        paddingBottom: '8%',
        display: 'flex',
        justifyContent: 'space-between',
        padding:'10%  8%'
      }}
    >
      <div>
        <Typography variant="h6" style={{color:textcol}}>About</Typography>
        <Typography variant="body2" style={{color:textcol}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </div>
      <div>
        <Typography variant="h6" style={{color:textcol}}>Categories</Typography>
        <Typography variant="body2" style={{color:textcol}}>Category 1</Typography>
        <Typography variant="body2" style={{color:textcol}}>Category 2</Typography>
        {/* Add more categories */}
      </div>
      <div>
        <Typography variant="h6" style={{color:textcol}}>Contacts</Typography>
        <Typography variant="body2" style={{color:textcol}}>Contact us at: contact@example.com</Typography>
        <Box sx={{ display: 'flex', gap: '10px', marginTop: '5%' }}>
          <InstagramIcon sx={{color:textcol }} />
          <FacebookIcon sx={{color:textcol}} />
          <EmailIcon sx={{color:textcol}} />
        </Box>
      </div>
    </Box>
  );
};

export default Footer;
