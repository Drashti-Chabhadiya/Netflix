'use client';
import { footerData } from '@/app/lib/footer/footerData';
import { Box, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import LanguageBtn from './LanguageBtn';

const SignInFooter = () => {
  return (
    <Container maxWidth={'lg'}>
      <Box sx={{ padding: '2rem 0' }} className="sign-footer">
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '16px',
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
                  <a
                    href={item.url}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      color: 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    {item.name}
                  </a>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <LanguageBtn height={'32px'} />
        </Grid>
      </Box>
    </Container>
  );
};

export default SignInFooter;
