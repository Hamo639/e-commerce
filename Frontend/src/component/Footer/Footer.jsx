import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box sx={{bgcolor:"#2B3445",py:2.4}}>
      <Typography sx={{display:{xs:"block",md:"flex"},justifyContent:"center",alignItems:"center",textAlign:"center",color:"HighlightText",fontSize:18}} variant="h6">
        Designed and Developed by 
        <Typography sx={{color:"rgb(252, 82, 82)",ml:"10px",fontSize:20,cursor:"pointer"}}>Mohamed Ashraf</Typography>
      </Typography>
    </Box>
  );
}

export default Footer;
