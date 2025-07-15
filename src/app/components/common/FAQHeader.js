import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Logo from './Logo';
import SignInButton from './SignInButton';

const FAQHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        padding: '20px',
      }}
    >
      <Box>
        <Logo
          width={{ xs: 88, md: 88 }}
          height={{
            xs: 32,
            md: 32,
          }}
        />
        <Typography variant="h4" sx={{ color: 'white', textAlign: 'center' }}>
          Help Center
        </Typography>
      </Box>
      <Box>
        <Button variant="contained">join Netflix</Button>
        <SignInButton />
      </Box>
    </Box>
  );
};

export default FAQHeader;
