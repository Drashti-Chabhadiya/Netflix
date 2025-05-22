'use client';
import { Box, Container } from '@mui/material';

const Header = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={{ padding: '0px !important' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '88px',
          width: '100%',
          maxHeight: '120rem',
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default Header;
