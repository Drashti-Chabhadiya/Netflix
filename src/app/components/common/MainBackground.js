import React from 'react';
import { Box } from '@mui/material';

const MainBackground = ({ children, color, bgImage, height, mainBgColor }) => {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: {
            xs: height,
            md: '100vh',
          },
          zIndex: 0,
          backgroundImage: {
            xs: mainBgColor ? 'none' : `url(${bgImage})`,
            sm: `url(${bgImage})`,
          },
          backgroundSize: {
            xs: 'none',
            sm: 'cover',
          },
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: {
            xs: height,
            md: '100vh',
          },
          backgroundColor: color,
          color: 'white',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainBackground;
