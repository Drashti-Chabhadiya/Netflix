'use client';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Logo = () => {
  const router = useRouter();
  return (
    <Box
    sx={{
      width: {
        xs: 100,
        md: 130,
      },
      height: {
        xs: 30,
        md: 40,
      },
      cursor: 'pointer',
      position: 'relative',
    }}
    onClick={() => router.push('/')}
  >
    <Image
      src="/assets/images/download-netflix.svg"
      alt="logo"
      fill 
      style={{ objectFit: 'contain' }}
    />
  </Box>
  );
};

export default Logo;
