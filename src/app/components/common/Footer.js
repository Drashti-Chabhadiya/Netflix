'use client';
import { footerData } from '@/app/lib/footer/footerData';
import { Box, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <Container maxWidth={'lg'}>
      <Box sx={{ padding: '2rem 0' }}>
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '16px',
            padding: '1rem 0',
          }}
        >
          Questions? Call{' '}
          <Link href="" style={{ textDecoration: 'underline' }}>
            000-800-919-1743
          </Link>
        </Typography>

        <Grid container spacing={2}>
          {footerData.map((item) => {
            return (
              <Grid key={item.id} size={{ lg: 3, xs: 12, md: 6, sm: 6 }}>
                <Box
                  sx={{
                    display: 'inline-block',
                    justifyContent: 'space-evenly',
                  }}
                >
                  <Link
                    href={item.url}
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'underline',
                      fontSize: '14px',
                      display: 'block',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.name}
                  </Link>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
