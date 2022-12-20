import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  const getdate = new Date();
  const getyear = getdate.getFullYear();
  return (
    <>
      <Box sx={{ textAlign: 'center' }}>
        <Typography>©All rights reserved Dejan Jasnic {getyear}</Typography>
      </Box>
    </>
  );
};

export default Footer;
