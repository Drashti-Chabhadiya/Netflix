import * as React from 'react';
import { Backdrop, Box } from '@mui/material';
import Header from '../common/Header';
import Logo from '../common/Logo';
import { forwardRef } from 'react';

export const CustomBackdrop = forwardRef(({ open, ...props }, ref) => {
  return (
    <Backdrop
      open={open}
      ref={ref}
      {...props}
      sx={{
        zIndex: -1,
        backgroundImage: 'url("/assets/images/main-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <Header>
          <Logo
            width={{ xs: 100, md: 150 }}
            height={{ xs: 30, md: 40 }}
          />
          <Box />
        </Header>
      </Box>
    </Backdrop>
  );
});

CustomBackdrop.displayName = 'CustomBackdrop';
