import React from 'react';
import { Box } from '@mui/material';

const HeaderButton = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '8px',
        position: {
          xs: 'absolute',
          sm: 'relative',
        },
        zIndex: 100,
        alignItems: 'end',
        justifyContent: 'end',
        width: { xs: '100%', sm: 'auto' },
        height: { xs: '40px', sm: 'auto' },
        top: { xs: '20px', sm: '0px' },
        right: { xs: '0px', sm: '0px' },
        padding: { xs: '0px 15px', sm: '0px' },
      }}
    >
      {children}
    </Box>
  );
};

export default HeaderButton;
