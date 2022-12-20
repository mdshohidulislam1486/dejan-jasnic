import { Box } from '@mui/material';
import React from 'react';
import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: '50vh' }}>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
