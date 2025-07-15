'use client';
import { Box, Container } from '@mui/material';

const Header = ({ children, padding }) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: {
          lg: `${padding || '0px'} 0px 0px 0px !important`,
        },
      }}
    >
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
