'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Logo = ({ width, height }) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        width: {
          ...width,
        },
        height: {
          ...height,
        },
        cursor: 'pointer',
        position: {
          xs: 'absolute',
          sm: 'relative',
        },
        zIndex: 100,
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
