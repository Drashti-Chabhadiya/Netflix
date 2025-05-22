import React from 'react';
import { Box } from '@mui/material';

const MainBackground = ({ children, color, bgImage, height, bgImageWidth }) => {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          height: {
            xs: height,
            md: '100vh',
          },
          width: '100%',
          backgroundColor: color,
          color: 'white',
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          height: {
            xs: height,
            md: '100vh',
          },
          color: 'white',
        }}
      ></Box>
    </Box>
  );
};

export default MainBackground;
